import React from 'react'
import { useTable } from 'react-table'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import RecipePreviewTable from '../components/recipe-preview-table'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query RecipePageQuery {
    recipes: allSanityRecipe(
      sort: { order: DESC, fields: brewDate }
      filter: { slug: { current: { ne: "null" } } }
    ) {
      edges {
        node {
          file {
            asset {
              url
            }
          }
          title
          slug {
            current
          }
          ibu
          style
          bjcp
          abv
          batchSize
          fermentation
          score
          recipePage
          brewDate
        }
      }
    }
  }
`

const RecipesPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const recipeNodes = data && data.recipes && mapEdgesToNodes(data.recipes)

  return (
    <Layout>
      <SEO title="Recipes" />
      <Container>
        <h1 className={responsiveTitle1}>Recipes</h1>
        {recipeNodes && recipeNodes.length > 0 && <RecipePreviewTable nodes={recipeNodes} />}
      </Container>
    </Layout>
  )
}

export default RecipesPage

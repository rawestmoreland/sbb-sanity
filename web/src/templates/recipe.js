import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Recipe from '../components/recipe'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { toPlainText } from '../lib/helpers'

export const query = graphql`
  query RecipeTemplateQuery($id: String!) {
    recipe: sanityRecipe(id: { eq: $id }) {
      id
    }
  }
`

const RecipeTemplate = (props) => {
  const { data, errors } = props
  const recipe = data && data.recipe

  return (
    <Layout>
      {errors && <SEO title={'GraphQL Error'} />}
      {recipe && <SEO title={recipe.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
    </Layout>
  )
}

export default RecipeTemplate

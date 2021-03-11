const { isFuture } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns')

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {} } = edge.node
      const path = `/blog/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id },
      })
    })
}

async function createRecipePages(graphql, actions) {
  const { createRecipe } = actions
  const result = await graphql(`
    {
      allSanityRecipe(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const recipeEdges = (result.data.allSanityRecipe || {}).edges || []

  recipeEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/recipe/${slug.current}/`

    createRecipe({
      path,
      component: require.resolve('./src/templates/recipe.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
  await createRecipePages(graphql, actions)
}

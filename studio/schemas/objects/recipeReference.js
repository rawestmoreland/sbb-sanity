export default {
  name: 'recipeReference',
  type: 'object',
  title: 'Recipe reference',
  fields: [
    {
      name: 'recipe',
      type: 'reference',
      to: [
        {
          type: 'recipe'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'recipe.name'
    }
  }
}

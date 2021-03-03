export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe File',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The name of the recipe.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'file',
      type: 'file',
      title: 'Recipe JSON',
      description: 'Upload your recipe JSON that was exported from Brewfather',
      options: {
        accept: '.json'
      }
    },
    {
      name: 'recipePage',
      type: 'boolean',
      title: 'Include in recipes page'
    }
  ],
  initialValue: {
    recipePage: false
  }
}

export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe File',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name',
      description: 'The name of the recipe.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.error('A slug is required').required()
    },
    {
      name: 'style',
      type: 'string',
      title: 'Style'
    },
    {
      name: 'batchSize',
      type: 'string',
      title: 'Batch Size',
      description: ''
    },
    {
      name: 'fermentation',
      type: 'string',
      title: 'Type of Fermentation',
      options: {
        list: ["Ale", "Lager", "Hybrid", "Mixed", "Sour"]
      }
    },
    {
      name: 'ibu',
      type: 'number',
      title: 'IBU'
    },
    {
      name: 'abv',
      type: 'number',
      title: 'ABV'
    },
    {
      name: 'bjcp',
      type: 'string',
      title: 'BJCP Style'
    },
    {
      name: 'score',
      type: 'string',
      title: 'Competition Score',
      description: 'Most recent comp score. ie: 30/40'
    },
    {
      name: 'brewDate',
      type: 'datetime',
      title: 'Brew date',
      description: 'The day you brewed the batch',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm'
      },
      validation: Rule => Rule.error('A brew date is required.').required()
    },
    {
      name: 'file',
      type: 'file',
      title: 'Recipe or Batch JSON',
      description: 'Upload your recipe or batch JSON that was exported from Brewfather. This file is used to created recipes for posts and recipe pages. The Recipes page table will use the input values above.',
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

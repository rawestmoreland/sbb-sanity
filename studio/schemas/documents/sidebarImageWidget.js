export default {
  name: 'imageWidget',
  type: 'document',
  title: 'Sidebar Image Widget',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Displays above image in sidebar'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'blurb',
      type: 'string',
      title: 'Blurb',
      description: 'Text that appears below the image'
    },
    {
      name: 'link',
      type: 'object',
      title: 'URL',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url'
        },
        {
          title: 'Open in a new window',
          name: 'blank',
          type: 'boolean'
        }
      ]
    }
  ]
}

export default {
  type: 'document',
  name: 'blogSidebar',
  title: 'Sidebar',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Sidebar Widgets',
      description: 'Add, edit, and reorder widgets',
      of: [{ type: 'imageWidget' }]
    }
  ]
}

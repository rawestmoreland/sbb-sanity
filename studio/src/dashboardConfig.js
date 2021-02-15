export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602ad002c1f36a66258f460d',
                  title: 'Sanity Studio',
                  name: 'sbb-sanity-studio',
                  apiId: '7de3e5df-e2bc-4ab1-af29-2cc5590594bb'
                },
                {
                  buildHookId: '602ad00236ca48702a7c48f0',
                  title: 'Blog Website',
                  name: 'sbb-sanity',
                  apiId: 'cdcde4da-c702-46df-8ea7-67992496835c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rawestmoreland/sbb-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sbb-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

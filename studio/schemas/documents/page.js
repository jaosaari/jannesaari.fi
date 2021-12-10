export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        title: 'Page Modules',
        name: 'modules',
        type: 'array',
        of: [
          { type: 'hero' },
          { type: 'featured' },
          { type: 'history' },
        ]
      },
      {
        title: 'SEO / Share Settings',
        name: 'seo',
        type: 'seo'
      }
    ],
  }
  
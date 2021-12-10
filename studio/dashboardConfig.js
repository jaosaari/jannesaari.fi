export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['page', 'label', 'labelCategory']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'project-users'
    },
    {
      name: 'project-info'
    }
  ]
}

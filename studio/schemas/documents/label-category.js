export default {
    name: 'labelCategory',
    title: 'Label Category',
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
        name: 'labels',
        title: 'Labels',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'label'}]}]
      },
    ],
  }
  
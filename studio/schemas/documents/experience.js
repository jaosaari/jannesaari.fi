export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'dates',
        title: 'Dates',
        type: 'dates',
      },
      {
        name: 'labels',
        title: 'Labels',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'label'}]}]
      },
        ],
  
    preview: {
      select: {
        title: 'company',
        subtitle: 'position',
      },
    },
  }
  
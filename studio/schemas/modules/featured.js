export default {
    name: 'featured',
    title: 'Featured',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },

      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'feature'}]}]
      },
    ],
  
    preview: {
      select: {
        photo: 'photo',
        content: 'content.0.children'
      },
      prepare({ photo, content }) {
        return {
          title: 'Featured',
          subtitle: content && content[0]?.text,
          media: photo
        }
      }
    }
  }
  
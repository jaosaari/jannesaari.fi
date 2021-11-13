export default {
    name: 'feature',
    title: 'Feature',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'labels',
        title: 'Labels',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'label'}]}]
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    //   {
    //     name: 'categories',
    //     title: 'Categories',
    //     type: 'array',
    //     of: [{type: 'reference', to: {type: 'category'}}],
    //   },
    //   {
    //     name: 'publishedAt',
    //     title: 'Published at',
    //     type: 'datetime',
    //   },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  
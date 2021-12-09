import customImage from '../lib/custom-image'

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
        name: 'photos',
        type: 'object',
        fields: [
          customImage({
            title: 'Feature Photo (mobile)',
            name: 'mobilePhoto'
          }),
          customImage({
            title: 'Feature Photo (desktop)',
            name: 'desktopPhoto'
          })
        ],
        // hidden: ({ parent }) => {
        //   return parent.bgType !== 'photo'
        // }
      },
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
  
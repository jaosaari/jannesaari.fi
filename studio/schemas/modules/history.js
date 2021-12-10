import { Star } from 'phosphor-react'

import customImage from '../../lib/custom-image'

export default {
    name: 'history',
    title: 'History',
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
        name: 'experiences',
        title: 'Experiences',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'experience'}]}]
      },
    ],
  
    preview: {
      select: {
        photo: 'photo',
        content: 'content.0.children'
      },
      prepare({ photo, content }) {
        return {
          title: 'History',
          subtitle: content && content[0]?.text,
          media: photo
        }
      }
    }
  }
  
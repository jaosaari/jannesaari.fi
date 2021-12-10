import { Star } from 'phosphor-react'

import customImage from '../../lib/custom-image'

export default {
    name: 'hero',
    title: 'Hero',
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

    ],
  
    preview: {
      select: {
        photo: 'photo',
        content: 'content.0.children'
      },
      prepare({ photo, content }) {
        return {
          title: 'Hero',
          subtitle: content && content[0]?.text,
          media: photo
        }
      }
    }
  }
  
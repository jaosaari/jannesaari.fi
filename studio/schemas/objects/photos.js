import customImage from '../../lib/custom-image'

export default {
    title: 'Photos',
    name: 'photos',
    type: 'object',
    fields: [
        customImage({
          title: 'Hero Photo (mobile)',
          name: 'mobilePhoto'
        }),
        customImage({
          title: 'Hero Photo (desktop)',
          name: 'desktopPhoto'
        })
      ],
  }
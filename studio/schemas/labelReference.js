export default {
    name: 'labelReference',
    type: 'object',
    title: 'label reference',
    fields: [
      {
        name: 'labelReference',
        type: 'reference',
        to: [
          {
            type: 'label',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'label.title',
      },
    },
  };
  
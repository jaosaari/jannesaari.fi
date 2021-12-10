      export default {
        title: 'Date',
        name: 'dates',
        type: 'object',
        fields: [
          {
            name: 'start',
            type: 'date',
            title: 'Start Date',
            options: {
              dateFormat: 'YYYY-MM-DD',
              calendarTodayLabel: 'Today',
            },
          },
          {
            name: 'end',
            type: 'date',
            title: 'End Date',
            options: {
              dateFormat: 'YYYY-MM-DD',
              calendarTodayLabel: 'Today',
            },
          },
        ],
      }
import type { Block } from 'payload'

export const FooterTimezones: Block = {
  slug: 'footerTimezones',
  interfaceName: 'FooterTimezones',
  fields: [
    {
      name: 'timezones',
      type: 'array',
      fields: [
        {
          name: 'city',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'GMTPlusHour',
          type: 'number',
          required: true,
        },
        {
          name: 'timezoneName',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

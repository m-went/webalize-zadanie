import type { Block } from 'payload'

export const FooterLinks: Block = {
  slug: 'footerLinks',
  labels: {
    singular: 'Kolumna linków',
    plural: 'Kolumny linków',
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

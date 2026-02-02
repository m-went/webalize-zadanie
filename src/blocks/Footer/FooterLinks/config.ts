import type { Block } from 'payload'

export const FooterLinks: Block = {
  slug: 'footerLinks',
  labels: {
    singular: 'Link column',
    plural: 'Link columns',
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
              admin: { width: '33%' },
            },
            {
              name: 'type',
              type: 'select',
              defaultValue: 'reference',
              options: [
                { label: 'Internal (Page)', value: 'reference' },
                { label: 'External (URL)', value: 'custom' },
              ],
              admin: { width: '33%' },
            },
            {
              name: 'reference',
              type: 'relationship',
              relationTo: ['pages', 'news'],
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
                width: '33%',
              },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
                width: '33%',
              },
            },
          ],
        },
      ],
    },
  ],
}

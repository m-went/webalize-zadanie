import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'languageSelector',
      type: 'array',
      fields: [
        {
          name: 'locale',
          type: 'text',
          required: true,
          admin: {
            description: 'Kod języka np. PL, EN, DE',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      maxRows: 1,
    },
    {
      name: 'menus',
      type: 'array',
      labels: {
        singular: 'Menu',
        plural: 'Menu',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
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
                    { label: 'Wewnętrzny (Strona)', value: 'reference' },
                    { label: 'Zewnętrzny (URL)', value: 'custom' },
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
        {
          name: 'linkButtons',
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
                    { label: 'Wewnętrzny (Strona)', value: 'reference' },
                    { label: 'Zewnętrzny (URL)', value: 'custom' },
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
            {
              name: 'primary',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Czy przycisk ma być wyróżniony',
              },
            },
          ],
        },
      ],
    },
  ],
}

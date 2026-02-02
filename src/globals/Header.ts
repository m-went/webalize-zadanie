import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { locales } from '@/constants/locales'
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'languageSelector',
      type: 'array',
      fields: [
        {
          name: 'locale',
          type: 'select',
          required: true,
          options: locales.map((l) => ({ label: l.label, value: l.code })),
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
      maxRows: 1,
    },
    {
      name: 'menus',
      type: 'array',
      labels: {
        singular: 'Menu',
        plural: 'Menus',
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
                    { label: 'Internal (Page)', value: 'reference' },
                    { label: 'External (URL)', value: 'custom' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'reference',
                  type: 'relationship',
                  relationTo: ['pages', 'posts'],
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
                    { label: 'Internal (Page)', value: 'reference' },
                    { label: 'External (URL)', value: 'custom' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'reference',
                  type: 'relationship',
                  relationTo: ['pages', 'posts'],
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
                description: 'Should be highlighted?',
              },
            },
          ],
        },
      ],
    },
  ],
}

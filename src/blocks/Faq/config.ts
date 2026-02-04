import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const Faq: Block = {
  slug: 'faqBlock',
  interfaceName: 'FaqBlock',
  labels: {
    singular: 'FAQ section',
    plural: 'FAQ sections ',
  },
  fields: [
    {
      name: 'categories',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'categoryTitle',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'categoryDescription',
          type: 'text',
          required: false,
          localized: true,
        },
        {
          name: 'questions',
          type: 'array',
          fields: [
            { name: 'question', type: 'text', required: true, localized: true },
            {
              name: 'answer',
              type: 'richText',
              required: true,
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature()]
                },
              }),
            },
          ],
        },
      ],
    },
  ],
}

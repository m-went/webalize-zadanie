import type { Block } from 'payload'

export const NewsText: Block = {
  slug: 'newsText',
  labels: {
    singular: 'Text',
    plural: 'Tekxts',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
      localized: true,
    },
  ],
}

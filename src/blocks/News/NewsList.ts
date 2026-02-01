import type { Block } from 'payload'

export const NewsList: Block = {
  slug: 'newsList',
  labels: {
    singular: 'Lista',
    plural: 'Listy',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Numerowana', value: 'ordered' },
        { label: 'Punktowana', value: 'unordered' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

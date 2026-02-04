import type { Block } from 'payload'

export const PostQuote: Block = {
  slug: 'postQuote',
  interfaceName: 'PostQuote',
  labels: {
    singular: 'Quote',
    plural: 'Quotes',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}

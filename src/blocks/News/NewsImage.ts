import type { Block } from 'payload'

export const NewsImage: Block = {
  slug: 'newsImage',
  labels: {
    singular: 'Zdjęcie',
    plural: 'Zdjęcia',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
}

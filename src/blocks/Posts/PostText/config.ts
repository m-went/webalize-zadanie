import type { Block } from 'payload'

export const PostText: Block = {
  slug: 'postText',
  labels: {
    singular: 'Text',
    plural: 'Texts',
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

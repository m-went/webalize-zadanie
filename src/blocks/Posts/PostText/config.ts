import type { Block } from 'payload'

export const PostText: Block = {
  slug: 'postText',
  interfaceName: 'PostText',
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

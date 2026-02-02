import type { CollectionConfig } from 'payload'

export const Faq: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'categories',
      type: 'array',
      required: true,
      labels: {
        singular: 'Category',
        plural: 'Categories',
      },
      fields: [
        {
          name: 'categoryName',
          label: 'Category name',
          type: 'text',
          required: true,
          localized: true,
          admin: { width: '50%' },
        },
        {
          name: 'categoryDescription',
          label: 'Category Description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'questions',
          label: 'Questions',
          type: 'array',
          labels: {
            singular: 'Question',
            plural: 'Questions',
          },
          fields: [
            {
              name: 'question',
              label: 'Question',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'answer',
              label: 'Answer',
              type: 'richText',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}

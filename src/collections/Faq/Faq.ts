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
        singular: 'Kategoria',
        plural: 'Kategorie',
      },
      fields: [
        {
          name: 'categoryName',
          label: 'Nazwa kategorii',
          type: 'text',
          required: true,
          localized: true,
          admin: { width: '50%' },
        },
        {
          name: 'categoryDescription',
          label: 'Opis kategorii',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'questions',
          label: 'Pytania i odpowiedzi',
          type: 'array',
          labels: {
            singular: 'Pytanie',
            plural: 'Pytania',
          },
          fields: [
            {
              name: 'question',
              label: 'Pytanie',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'answer',
              label: 'Odpowiedź',
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

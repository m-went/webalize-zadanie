import type { CollectionConfig } from 'payload'

export const IntegrationCategories: CollectionConfig = {
  slug: 'integration-categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Nazwa kategorii na przycisku' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      admin: { description: 'Krótki opis kategorii' },
    },
  ],
}

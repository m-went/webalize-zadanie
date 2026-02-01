import type { Block } from 'payload'

export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: 'Lista Treści',
    plural: 'Listy Treści',
  },
  fields: [
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        { label: 'Kolekcja', value: 'collection' },
        { label: 'Ręczny wybór', value: 'selection' },
      ],
    },
    {
      name: 'relationTo',
      type: 'select',
      defaultValue: 'news',
      label: 'Wybierz kolekcję do wyświetlenia',
      options: [
        { label: 'Newsy', value: 'news' },
        { label: 'Integracje', value: 'integrations' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      name: 'selectedCategories',
      type: 'relationship',
      relationTo: 'integration-categories',
      label: 'Wyświetlane Kategorie',
      hasMany: true,
      admin: {
        description:
          'Wybierz kategorie, które mają pojawić się jako przyciski filtrów. Zostaw puste, aby pokazać wszystkie.',
        condition: (_, siblingData) => siblingData.relationTo === 'integrations',
      },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 10,
      label: 'Ilość elementów na start',
    },

    {
      name: 'selectedDocs',
      type: 'relationship',
      relationTo: ['news', 'integrations'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
  ],
}

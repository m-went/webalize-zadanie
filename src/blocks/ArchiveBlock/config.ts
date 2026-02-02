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
        { label: 'Collection', value: 'collection' },
        { label: 'Picker', value: 'selection' },
      ],
    },
    {
      name: 'relationTo',
      type: 'select',
      defaultValue: 'news',
      label: 'Select collection to show',
      options: [
        { label: 'News', value: 'news' },
        { label: 'Integrations', value: 'integrations' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      name: 'selectedCategories',
      type: 'relationship',
      relationTo: 'integration-categories',
      label: 'Selected categories',
      hasMany: true,
      admin: {
        description: 'Select categories to show as filter buttons. Leave empty to show all.',
        condition: (_, siblingData) => siblingData.relationTo === 'integrations',
      },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 10,
      label: 'Number of elements',
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

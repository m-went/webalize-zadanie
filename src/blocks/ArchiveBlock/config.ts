import type { Block } from 'payload'

export const Archive: Block = {
  slug: 'archive',
  interfaceName: 'ArchiveBlock',
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
      defaultValue: 'posts',
      label: 'Select collection to show',
      options: [
        { label: 'Posts', value: 'posts' },
        { label: 'Integrations', value: 'integrations' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      name: 'selectedCategories',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Selected categories',
      hasMany: true,
      admin: {
        description: 'Select categories to show as filter buttons. Leave empty to show all.',
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
      relationTo: ['posts', 'integrations'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
  ],
}

import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'Opis',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      required: false,
      localized: true,
    },
    {
      name: 'showSearch',
      type: 'checkbox',
      defaultValue: false,
      label: 'Show searchbar',
    },
  ],
  label: false,
}

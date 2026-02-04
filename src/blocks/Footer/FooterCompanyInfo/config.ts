import type { Block } from 'payload'

export const FooterCompanyInfo: Block = {
  slug: 'footerCompanyInfo',
  interfaceName: 'FooterCompanyInfo',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: false,
    },
    {
      name: 'info',
      type: 'array',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'phoneNumber',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

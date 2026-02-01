import type { GlobalConfig } from 'payload'

import { FooterCompanyInfo } from '@/blocks/Footer/FooterCompanyInfo'
import { FooterLinks } from '@/blocks/Footer/FooterLinks'
import { FooterTimezones } from '@/blocks/Footer/FooterTimezones'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerBlocks',
      type: 'blocks',
      blocks: [FooterCompanyInfo, FooterLinks, FooterTimezones],
    },
  ],
}

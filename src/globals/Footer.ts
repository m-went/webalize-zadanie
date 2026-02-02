import { FooterCompanyInfo } from '@/blocks/Footer/FooterCompanyInfo/config'
import { FooterLinks } from '@/blocks/Footer/FooterLinks/config'
import { FooterTimezones } from '@/blocks/Footer/FooterTimezones/config'
import type { GlobalConfig } from 'payload'

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

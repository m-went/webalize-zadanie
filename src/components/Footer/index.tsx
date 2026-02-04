import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { Footer as FooterType } from '@/payload-types'
import { SupportedLocale } from '@/constants/locales'

export const Footer = async ({ locale }: { locale: string }) => {
  const payload = await getPayload({ config: configPromise })

  const footerData: FooterType = await payload.findGlobal({
    slug: 'footer',
    locale: locale as SupportedLocale,
  })

  if (!footerData || !footerData.footerBlocks) return null

  return (
    <footer>
      <RenderBlocks blocks={footerData.footerBlocks} />
    </footer>
  )
}

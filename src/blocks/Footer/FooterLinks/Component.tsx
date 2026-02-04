import React from 'react'
import type { FooterLinks as FooterLinksProps } from '@/payload-types'

export const FooterLinksBlock: React.FC<FooterLinksProps> = (props) => {
  const { links } = props

  if (!links || links.length === 0) return null

  return (
    <nav>
      <ul>
        {links.map((linkItem, index) => {
          const { type, label, reference, url: customUrl } = linkItem

          let href = '#'
          if (type === 'reference' && reference?.value && typeof reference.value === 'object') {
            href = `/${reference.value.slug}`
          } else if (type === 'custom' && customUrl) {
            href = customUrl
          }

          return (
            <li key={index}>
              <a href={href}>{label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

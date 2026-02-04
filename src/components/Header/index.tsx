import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Header as HeaderType } from '@/payload-types'
import { SupportedLocale } from '@/constants/locales'

export const Header = async ({ locale }: { locale: string }) => {
  const payload = await getPayload({ config: configPromise })

  const headerData: HeaderType = await payload.findGlobal({
    slug: 'header',
    locale: locale as SupportedLocale,
  })

  if (!headerData) return null

  const { menus, languageSelector } = headerData

  return (
    <header>
      {languageSelector && languageSelector.length > 0 && (
        <nav aria-label="Language selector">
          <ul>
            {languageSelector.map((item, i) => (
              <li key={i}>
                <a href={`/${item.locale}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <nav aria-label="Main navigation">
        {menus?.map((menu, index) => (
          <div key={index}>
            <strong>{menu.title}</strong>

            <ul>
              {menu.links?.map((linkItem, i) => {
                const href =
                  linkItem.type === 'reference' && typeof linkItem.reference?.value === 'object'
                    ? `/${linkItem.reference.value.slug}`
                    : linkItem.url || '#'

                return (
                  <li key={i}>
                    <a href={href}>{linkItem.label}</a>
                  </li>
                )
              })}
            </ul>

            {menu.linkButtons && menu.linkButtons.length > 0 && (
              <div>
                {menu.linkButtons.map((btn, i) => {
                  const href =
                    btn.type === 'reference' && typeof btn.reference?.value === 'object'
                      ? `/${btn.reference.value.slug}`
                      : btn.url || '#'

                  return (
                    <a key={i} href={href}>
                      {btn.primary ? `[ ${btn.label} ]` : btn.label}
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}

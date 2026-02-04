import React from 'react'
import type { FooterCompanyInfo as FooterCompanyInfoProps } from '@/payload-types'

export const FooterCompanyInfoBlock: React.FC<FooterCompanyInfoProps> = (props) => {
  const { title, info } = props

  return (
    <section>
      {title && <h3>{title}</h3>}
      {info && info.length > 0 && (
        <address>
          <ul>
            {info.map((item, index) => (
              <li key={index}>
                <p>
                  Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
                <p>
                  Tel: <a href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</a>
                </p>
              </li>
            ))}
          </ul>
        </address>
      )}
    </section>
  )
}

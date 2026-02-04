import React from 'react'
import type { FooterTimezones as FooterTimezonesProps } from '@/payload-types'

export const FooterTimezonesBlock: React.FC<FooterTimezonesProps> = (props) => {
  const { timezones } = props

  if (!timezones || timezones.length === 0) return null

  return (
    <section>
      <ul>
        {timezones.map((tz, index) => (
          <li key={index}>
            <strong>{tz.city}</strong>:
            <time>
              {tz.timezoneName} (GMT {tz.GMTPlusHour >= 0 ? `+${tz.GMTPlusHour}` : tz.GMTPlusHour})
            </time>
          </li>
        ))}
      </ul>
    </section>
  )
}

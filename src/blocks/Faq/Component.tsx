import React from 'react'
import RichText from '@/components/RichText'
import type { FaqBlock as FaqBlockProps } from '@/payload-types'

export const FaqBlock: React.FC<FaqBlockProps> = (props) => {
  const { categories } = props

  if (!categories) return null

  return (
    <section>
      {categories.map((cat, catIndex) => (
        <div key={catIndex}>
          <header>
            <h3>{cat.categoryTitle}</h3>
            {cat.categoryDescription && <p>{cat.categoryDescription}</p>}
          </header>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {cat.questions?.map((q, qIndex) => (
              <details key={qIndex}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>{q.question}</summary>
                <div>
                  <RichText data={q.answer} />
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

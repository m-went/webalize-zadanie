import React from 'react'

export type CodeBlockProps = {
  code: string
  language?: string
  blockType: 'code'
}

type Props = CodeBlockProps

export const CodeBlock: React.FC<Props> = ({ code, language }) => {
  return (
    <div>
      <pre>
        <code className={language ? `language-${language}` : ''}>{code}</code>
      </pre>
    </div>
  )
}

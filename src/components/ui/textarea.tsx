import * as React from 'react'

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ ...props }) => {
  return <textarea data-slot="textarea" {...props} />
}

export { Textarea }

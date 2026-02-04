import RichText from '@/components/RichText'
import React from 'react'

import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const Message: React.FC<{ message: DefaultTypedEditorState }> = ({ message }) => {
  return <div>{message && <RichText data={message} />}</div>
}

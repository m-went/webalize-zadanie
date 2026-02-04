import * as React from 'react'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ type, ...props }) => {
  return <input data-slot="input" type={type} {...props} />
}

export { Input }

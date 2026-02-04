import * as React from 'react'

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <div data-slot="card" {...props} />
}

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <div data-slot="card-header" {...props} />
}

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return <h3 data-slot="card-title" {...props} />
}

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ ...props }) => {
  return <p data-slot="card-description" {...props} />
}

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <div data-slot="card-content" {...props} />
}

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <div data-slot="card-footer" {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

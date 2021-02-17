import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
  marks: {
    link: ({children, mark}) => 
      mark.blank ? (
        <a target="_blank" href={mark.href} rel="noopener noreferer">
          {children}
        </a>
        ) : (
        <a href={mark.href}>{children}</a>
        )
  }
}

export default serializers

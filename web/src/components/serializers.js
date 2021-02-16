import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    file: ({node}) => <pre>{JSON.stringify(node.asset._ref)}</pre>
  }
}

export default serializers

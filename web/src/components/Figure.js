import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth: 500 }, clientConfig.sanity)
  return (
    <figure style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption style={{ fontSize: '0.75rem' }}>{node.caption}</figcaption>
    </figure>
  )
}

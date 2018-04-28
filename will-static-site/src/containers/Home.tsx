import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(({title}: {title: string}) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to {title}</h1>
  </div>
))

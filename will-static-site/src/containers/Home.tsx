import React from 'react'
import { withSiteData } from 'react-static'

import logoImg from '../logo.png'

export default withSiteData(({title}: {title: string}) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to {title}</h1>
    <img src={logoImg} alt="" />
  </div>
))

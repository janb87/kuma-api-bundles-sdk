import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Post } from '../types'

interface Props {
  page: object
}

export default withRouteData(({ page }: Props) => (
  <div>
    <h1>Will page parts</h1>
    <p>
      {JSON.stringify(page, undefined, 2)}
    </p>
  </div>
))

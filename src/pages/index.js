import React from 'react'

import Layout from '../components/layout'
import Listing from '../components/listing'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Listing />
    <Listing />
    <Listing />
    <Listing />
  </Layout>
)

export default IndexPage

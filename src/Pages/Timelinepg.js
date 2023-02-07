import React from 'react'
import Header from '../Components/Header/Header'
import Layout from '../Components/Layout/Layout'
import Marquee from '../Components/Marquee/Marquee'
import Timeline from '../Components/Timeline/Timeline'

const Timelinepg = () => {
  return (
    <Layout>
        <Header />
        <Timeline />
        <Marquee />
    </Layout>
  )
}

export default Timelinepg
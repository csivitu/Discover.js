import React from 'react'
import Err404 from '../Components/404/Err404'
import Header from '../Components/Header/Header'
import Layout from '../Components/Layout/Layout'
import Marquee from '../Components/Marquee/Marquee'


const ErrPage = () => {
  return (
    <Layout>
        <Header />
        <Err404 />
        <Marquee />
    </Layout>
  )
}

export default ErrPage
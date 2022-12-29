import React from 'react'
import Banner from '../../components/banner/Banner'
import Blog from '../../components/blog/Blog'
import Client from '../../components/client/Client'
import Form from '../../components/from/From'
import Product from '../../components/product/Product'
import Project from '../../components/project/Project'
import Work from '../../components/work/Work'

function Home() {
  return (
    <>
       <Banner></Banner>
       <Work></Work>
       <Project></Project>
       <Product></Product>
       <Client></Client>
       <Form></Form>
       <Blog></Blog>
    </>
  )
}

export default Home
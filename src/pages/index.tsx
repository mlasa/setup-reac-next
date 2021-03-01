import React from 'react'
import Head from 'next/head'
import { ReactNode } from 'react'

//import Hello from '../assets/hello.jpg'

interface HomeProps {
  children: ReactNode
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Setup Example</title>
      </Head>
      <main>
        {/*<Hello />*/}
        <h1>Hello world</h1>
      </main>
    </div>
  )
}
export default Home

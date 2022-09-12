import Head from 'next/head'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Second from '../components/Second'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'
import { Global } from '../styled/globalstyles'

export default function Home() {
  return (
    <Global>
      <Head>
        <title>shortly</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <NavBar/>
      <Main/>
      <Second/>
      <Footer/>
      <Footer2/>
    </Global>
    
  )
}

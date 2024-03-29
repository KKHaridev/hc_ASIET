import Head from 'next/head'
import { Footer, Navbar } from "../components/"
import { About, Cards, Contact, Events, Main } from "../sections/"
import { Element } from 'react-scroll'



export default function Home() {
  return (
    <>
      <Head>
        <title>Hack Club ASIET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  

      <Element name="Home">
        <Main />
      </Element>

      <Element name="About">
        <About />
      </Element>

      <Element name="Cards">
        <Cards />
      </Element>

      <Element name="Events">
        <Events />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>

      


    </>
  )
}

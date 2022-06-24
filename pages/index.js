import React, { useState } from 'react'
import Head from 'next/head'
import Menu from '../pages/Menu'
import styles from '../styles/Home.module.css'
import CardSection from './CardSection'
import Projects from './projects'
import Hero from './Hero'
import Team from './Team'
import Quote from './Quote'
import Footer from './Footer'
import SideMenu from './SideMenu'

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false)

  function toggleMenu(event) {
    event.stopPropagation()
    setMenuIsActive(!menuIsActive)
  }

  let isVisible = (menuIsActive) ? "show" : "hide";

  return (
    <div className={styles.container}>
      <Head>
        <title>Edie</title>
        <meta name="description" content="Edie company profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="navbar">
          <span className={styles.logo}>Edie</span>
            <Menu /> 
            <SideMenu 
              toggleMenu={toggleMenu}
              isVisible={isVisible}   
            />
        </div>
        <Hero />
        <style jsx>{`
          header {
            width: 100%;
            margin: 20px 50px;
          }

          .navbar {
            width: 100%;
            padding: 0 0 30px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          @media only screen and (min-width: 540px) {
            header {
              margin: 40px 50px;
            }

            .navbar {
              padding: 0 50px 100px 50px;
            }
          }
        `}</style>
      </header>

      <main>
        <CardSection />
        <Projects />
        <Team />
        <Quote />

      </main>
      
      <footer>
          <Footer />
      </footer>

    </div>
  )
}

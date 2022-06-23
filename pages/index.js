import { useState } from 'react'
import Head from 'next/head'
import Menu from '../pages/Menu'
import styles from '../styles/Home.module.css'
import CardSection from './CardSection'
import Projects from './projects'
import Hero from './Hero'
import Team from './Team'
import Contact from './Contact'
import Quote from './Quote'
import Footer from './Footer'

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false)

  function toggleMenu(event) {
    event.preventDefault()
    setMenuIsActive(!menuIsActive)
    console.log(event.target);
  }

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
          {menuIsActive ? <Menu menuIsActive={menuIsActive} toggleMenu={toggleMenu} isVisible={menuIsActive} /> : 
            <div className='mini-menu' onClick={(e) => toggleMenu(e)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
            </div>
          }
        </div>
        <Hero />
        <style jsx>{`
          header {
            width: 100vw;
            margin: 20px 50px;
          }

          .mini-menu {
            margin-right: 1rem;
            fill: #333333;
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

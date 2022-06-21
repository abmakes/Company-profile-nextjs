import { useState } from 'react'
import Head from 'next/head'
import Menu from '../pages/Menu'
import styles from '../styles/Home.module.css'
import CardSection from './CardSection'
import Projects from './projects'
import Hero from './Hero'

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(true)

  function toggleMenu(event) {
    event.preventDefault()
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
        <div className={styles.navbar}>
          <span className={styles.logo}>Edie</span>
          {menuIsActive ?<Menu menuIsActive={menuIsActive} toggleMenu={toggleMenu} isVisible={menuIsActive} /> : 
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
            </div>
          }
        </div>
      </header>

      <main>
        <Hero />
        <CardSection />
        <Projects />

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

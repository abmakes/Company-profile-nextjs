import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../pages/Menu'
// import heroPic from '..public/heroImage.jpg'
import styles from '../styles/Home.module.css'
import CardSection from './CardSection'
import Projects from './projects'

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false)

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

      <main className={styles.main}>
        <h4>Unhappy with your website?</h4>
        <h1>
          We create beautiful and fast web services
        </h1>
        <div className={styles.borderRadius18}>
            {/* <Image src="/heroImage.jpg" alt="teamwork on web services" width="1332px" height="354px"/> */}
        </div>
        <h1>Story, emotion and purpose</h1>
        <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>

        <form>
          <label htmlFor="email">Want us to contact you?</label><br />
          <input type="text"></input>
          <button>Join</button>
        </form>
      </main>

      <CardSection />

      <Projects />

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

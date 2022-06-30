import Image from 'next/image'
import man4Pic from "../public/person4.webp"
import styles from '../styles/Rounded.module.css'


export default function Quote() {
  return (
    <section id="clients" className="quote-section">
      <h2>“Fast and outstanding results. Edie understands their customer’s needs. They have a young and talented team.”</h2>
      <div className='client-area'>
        <Image
          className={styles.roundedImg} 
          src={man4Pic}
          alt='quote client'
          height={82}
          width={82}
        />
        <div>
          <span className='client-name'>Carlos Tran</span>
          <p  className='client-text'>The Decorate Gatsby</p>
        </div>
      </div>

      <style jsx>{`
        .quote-section {
          display: flex;
          flex-direction: column;
          max-width: 900px;
          margin: 7rem 1rem;
        }

        .client-area {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
        }

        .client-text {
          color: #767676;
        }

        p {
          margin: 0;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
        }

        .client-name {
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
        }

        @media only screen and (min-width: 540px) {
          .quote-section {
            margin: 15rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}
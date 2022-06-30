import Image from 'next/image'
import man1Pic from "../public/person1.png"
import man2Pic from "../public/person2.png"
import womanPic from "../public/person3.png"
import styles from '../styles/Team.module.css'

export default function Team() {
  return (
    <section className="team-section">
      <div className="text">
        <span className="red">Meet the team</span>
        <h2>We are chilled<br /> and a laidback <br />team</h2>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      </div>
      <div className="images">
        <div className="left">
          <Image 
            className={styles.teamImg1}
            src={womanPic}
            alt="smiling-woman"
            height={320}
            width={320}
          />
        </div>
        <div className="right">
          <Image 
            className={styles.teamImg1}
            src={man1Pic}
            alt="employee"
            height={260}
            width={260}
          />

          <Image
            className={styles.teamImg1} 
            src={man2Pic}
            alt="happy-man"
            height={300}
            width={292}
          />
        </div>
      </div>
      
      <style jsx>{`
        h2 {
          margin: 0;
          padding: 0;
        }

        .left {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          align-items: flex-start;
        }

        .red {
          color: #d14040;
        }

        .text {
          width: 300px;
        }

        .team-section {
          margin: 50px 15px 0 15px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .images {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          aspect-ratio: 636 / 584;
          gap: 1rem;
        }

        @media only screen and (min-width: 800px) {
          .images {
            width: 424px;
          }
        }
        
        @media only screen and (min-width: 960px) {
          .images {
            width: 584px;
          }

          .team-section {
            justify-content: space-between;
          }
        }

      `}</style>
    </section>

  )
}
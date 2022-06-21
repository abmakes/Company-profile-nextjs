
import Image from 'next/image'
import onboardPic from "../public/onboard.png"
import smarthomePic from "../public/smarthome.jpg"
import juicePic from "../public/juice-product.png"
import bookingPic from "../public/booking.png"
import styles from '../styles/Projects.module.css'

export default function Projects () {
  
  return (
    <>
    <h2 className="h2-container">Good design means<br /> good business</h2>
    <section className='project-section'>
      <div className="projects-container">
        <div className="project" >
          <Image 
            className={styles.projectImg}  
            src={smarthomePic}
            alt="Smart home dashboard"
            height="545px"
            width="545px"
          />
          <span className="catergory-text">Full stack application</span>
          <span className="project-title">Smart home dashboard</span>
        </div>
        
        <div className="project top-gap" >
          <Image 
            className={styles.projectImg} 
            src={onboardPic}
            alt="Onboard application"
            height="545px"
            width="545px"
          />
          <span className="catergory-text">UX/UI design</span>
          <span className="project-title">Onboard application</span>
        </div>

        <div className="project">
          <Image 
            className={styles.projectImg}  
            src={juicePic}
            alt="Booking system"
            height="545px"
            width="545px"
          />
          <span className="catergory-text">Front End applicati on</span>
          <span className="project-title">Juice product homepage</span>
        </div>

        <div className="project top-gap">
          <Image 
            className={styles.projectImg}  
            src={bookingPic}
            alt="Booking system"
            height="545px"
            width="545px"
          />
          <span className="catergory-text">Mobile application</span>
          <span className="project-title">Booking system</span>
        </div>

        <h4 className="see-more">
          <a href="#">see more </a>
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M17.5 16.5 16.075 15.1 18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12Z"/></svg>
        </h4>
      </div>
      <style jsx>{`
        .project-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .projects-container {
          display: flex;
          flex-direction: row-reverse;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 1120px;
        }

        .project {
          display: flex;
          flex-direction: column;
          max-width: 545px;
          border-radius: 12px;
          overflow: hidden;
        }

        .top-gap {
          margin-top: 10rem;
        }

        .catergory-text {
          margin-top: 1rem;
          font-weight: 300;
          font-size: 14px;
          line-height: 21px;
          color: #828282;
        }

        .project-title {
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
        }

        .see-more {
          position: relative;
          top: -3.5rem;
        }

        .arrow {
          position: relative;
          top: 6px;
          fill: #2D9CDB;
        }

      `}</style>
    </section>
    </>
  )

}
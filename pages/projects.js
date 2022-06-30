
import Image from 'next/image'
import onboardPic from "../public/onboard.png"
import smarthomePic from "../public/smarthome.jpg"
import juicePic from "../public/juice-product.png"
import bookingPic from "../public/booking.png"
import styles from '../styles/Rounded.module.css'

export default function Projects () {
  
  return (
    <>
    <div id="projects" className="margin10">
      <h2 >Good design means<br /> good business</h2>
    </div>
    <section className='project-section'>
      <div className="projects-container">
        <div className="project" >
          <Image 
            className={styles.roundedImg}  
            src={smarthomePic}
            alt="Smart home dashboard"
            height={545}
            width={545}
          />
          <span className="catergory-text">Full stack application</span>
          <span className="project-title">Smart home dashboard</span>
        </div>
        
        <div className="project top-gap" >
          <Image 
            className={styles.roundedImg} 
            src={onboardPic}
            alt="Onboard application"
            height={545}
            width={545}
          />
          <span className="catergory-text">UX/UI design</span>
          <span className="project-title">Onboard application</span>
        </div>

        <div className="project">
          <Image 
            className={styles.roundedImg}  
            src={juicePic}
            alt="Booking system"
            height={545}
            width={545}
          />
          <span className="catergory-text">Front End application</span>
          <span className="project-title">Juice product homepage</span>
        </div>

        <div className="project top-gap">
          <Image 
            className={styles.roundedImg}  
            src={bookingPic}
            alt="Booking system"
            height={545}
            width={545}
          />
          <span className="catergory-text">Mobile application</span>
          <span className="project-title">Booking system</span>
        </div>

        <span className="see-more">
          <a href="#">see more </a>
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M17.5 16.5 16.075 15.1 18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12Z"/></svg>
        </span>
      </div>
      
    </section>
    <style jsx>{`
        .project-section {
          margin: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .margin10 {
          margin: 10px;
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
          max-width: 400px;
          border-radius: 12px;
          overflow: hidden;
        }

        .top-gap {
          margin-top: 1rem;
        }

        .catergory-text {
          margin-top: 1rem;
          font-weight: 300;
          font-size: 14px;
          line-height: 21px;
          color: #666666;
        }

        .project-title {
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
        }

        .see-more {
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #005da3;
          margin: 0;
          position: relative;
          width: 100%;
          text-align: right;
          top: -1rem;
        }

        .arrow {
          position: relative;
          top: 8px;
          fill: #005da3;
        }
        
        @media only screen and (min-width: 540px) {
          .top-gap {
            margin-top: 1rem;
          }

          .see-more {
            position: relative;
            top: -3.5rem;
          }

          .projects-container {
            justify-content: center;
            max-width: 920px;
          }

        }

        @media only screen and (min-width: 870px) {
          .top-gap {
            margin-top: 10rem;
          }
        }
        
        @media only screen and (min-width: 1160px) {


          .arrow {
            top: 6px;
          }

          .project {
            max-width: 545px;
          }

          .projects-container {
            max-width: 1120px;
          }
        }

      `}</style>
    </>
  )

}
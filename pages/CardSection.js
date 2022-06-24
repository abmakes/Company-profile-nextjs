
export default function CardSection () {
  
  return (
    <section className='cardSection'>
    
    <div id="services"><h2>We offer high <br />demand services</h2></div>
    
    <div className='cardGroup'>
      <div className='card'>
        
        <div className='icon blue'>   
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM17.85 10.4 7.25 21H3V16.75L13.6 6.15Z"/></svg>
        </div>  
        <h3>UI/UX Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
        <button className='btnSecondary'>Get Started</button>            
      
      </div>

      <div className='card'>
        
        <div className='icon green'>   
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8 18 2 12 8 6 9.425 7.425 4.825 12.025 9.4 16.6ZM16 18 14.575 16.575 19.175 11.975 14.6 7.4 16 6 22 12Z"/></svg>
        </div>
        <h3>Front End</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
        <button className='btnPrimary'>Get Started</button>
      
      </div>

      <div className='card'>

        <div className='icon red'>    
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 20V16H21V20ZM5 19H7V17H5ZM3 8V4H21V8ZM5 7H7V5H5ZM3 14V10H21V14ZM5 13H7V11H5Z"/></svg>
        </div>
    
        <h3>Back End</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
        <button className='btnSecondary'>Get Started</button>
      
      </div>
    
    </div>

    <style jsx>{`
      .cardGroup {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:center;
      }

      .card {
        margin: 1rem;
        padding: 3rem 2rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border-radius: 24px;
        transition: box-shadow 0.15s ease;
        max-width: 340px;
      }

      .card:hover,
      .card:focus,
      .card:active {
        box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
      }

      .card h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .cardSection {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
            
      svg {
        fill: rgb(255, 255, 255);
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 67px;
        padding: 20px;
        border-radius: 16px;
      }

      .green {
        background-color: #27AE60;
      }
      .blue {
        background-color: #005da3;
      }
      .red {
        background-color: #EB5757;
      }

      .btnSecondary {
        background: #E0E0E0;
        color: #555555;
        padding: 9px 12px;
        border-radius: 12px;
        border: none;
        margin-top: 1rem;
      }
      
      .btnPrimary {
        background: #005da3;
        color: #FFFFFF;
        padding: 9px 12px;
        border-radius: 12px;
        border: none;
        margin-top: 1rem;
      }

      @media only screen and (min-width: 540px) {
        .cardSection {
          margin: 5rem 1rem;
        }
      }
      `}</style>
  
  </section>
  )
}
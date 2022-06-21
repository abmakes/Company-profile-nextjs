
export default function CardSection () {
  
  return (
    <section className='cardSection'>
    
    <div><h2>We offer high <br />demand services</h2></div>
    
    <div className='cardGroup'>
      <div className='card'>
        
        <div className='icon blue'>   
          <svg className="blue" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.7 14.7 33.3 8.3 35.4 6.2Q36.25 5.35 37.525 5.375Q38.8 5.4 39.65 6.25L41.8 8.4Q42.65 9.25 42.65 10.5Q42.65 11.75 41.8 12.6ZM37.6 16.8 12.4 42H6V35.6L31.2 10.4Z"/></svg>
        </div>  
        <h3>UI/UX Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
        <button className='btnSecondary'>Get Started</button>            
      
      </div>

      <div className='card'>
        
        <div className='icon green'>   
          <svg className="green" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M31.9 36 29.75 33.85 39.7 23.9 29.85 14.05 32 11.9 44 23.9ZM16 35.9 4 23.9 16.1 11.8 18.25 13.95 8.3 23.9 18.15 33.75Z"/></svg>
        </div>
        <h3>Front End</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
        <button className='btnPrimary'>Get Started</button>
      
      </div>

      <div className='card'>

        <div className='icon red'>    
          <svg className="red" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 40V32.6H42V40ZM9 38.1H12.6V34.5H9ZM6 15.4V8H42V15.4ZM9 13.5H12.6V9.9H9ZM6 27.7V20.3H42V27.7ZM9 25.8H12.6V22.2H9Z"/></svg>
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
        margin: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 88px;
        padding: 20px;
        border-radius: 16px;
      }

      .green {
        background-color: #27AE60;
      }
      .blue {
        background-color: #2D9CDB;
      }
      .red {
        background-color: #EB5757;
      }

      .btnSecondary {
        background: #E0E0E0;
        color: #828282;
        padding: 9px 12px;
        border-radius: 12px;
        border: none;
        margin-top: 1rem;
      }
      
      .btnPrimary {
        background: #2D9CDB;
        color: #FFFFFF;
        padding: 9px 12px;
        border-radius: 12px;
        border: none;
        margin-top: 1rem;
      }
      `}</style>
  
  </section>
  )
}
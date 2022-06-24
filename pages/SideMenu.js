
export default function SideMenu(props) {
  return (
    <div className='mini-menu' onClick={(e) => props.toggleMenu(e)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
      <div id='sidebar-menu' className={props.isVisible}>
        <div className='sidebar-items'>
          <a className="menu-item" href="#__next">Home</a>
          <a className="menu-item" href="#services">Services</a>
          <a className="menu-item" href="#projects">Our Works</a>
          <a className="menu-item" href="#clients">Clients</a>
          <a className="menu-item" href="#contact">Contact</a>
        </div>
      </div>

      <style jsx>{`

        .hide {
          transform: translate(50vw, 0);
        }
        
        .show {
          transform: translate(0, 0);
          overflow: hidden;
        }

        .mini-menu {
          margin-right: 1rem;
          fill: #333333;
        }

        #sidebar-menu {
          position: fixed;
          width: 50vw;
          height: 100vh;
          background-color: #333333;
          opacity: 0.97;
          right: 0;
          top: 0;
          transition: transform .9s cubic-bezier(0, .52, 0, 1);
          z-index: 99;
        }

        .sidebar-items {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: right;
          
          height: 500px;
          padding: 5rem 3rem;

          font-size: 20px;
          font-weight: 500;
          line-height: 36px;            
          color: white;
        }

        a {
          width: 120px;
        }

        @media only screen and (min-width: 900px) {
          .mini-menu {
            display: none;
          }
        }
      `}
      </style>
    </div>
  )
}

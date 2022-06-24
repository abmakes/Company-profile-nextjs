
export default function Menu() {
  return (
    <nav className='menu'>
      
      <a className="menu-item" href="#__next">Home</a>
      <a className="menu-item" href="#services">Services</a>
      <a className="menu-item" href="#projects">Our Works</a>
      <a className="menu-item" href="#clients">Clients</a>
      <a className="menu-item" href="#contact">Contact</a>
      
      <style jsx>{`
        .menu-item {
          margin: 0px 15px;
          font-size: 16px;
          font-weight: 500;
          display: none;
        }

        @media only screen and (min-width: 1200px) {
          .menu-item {
            margin: 0px 20px;
          }
        }

        @media only screen and (min-width: 900px) {
          .menu-item {
            margin: 0px 15px;
            font-size: 20px;
            display: inline;
          }
        }

      `}</style>
    </nav>

  )
}

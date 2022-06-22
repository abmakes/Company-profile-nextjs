
export default function Menu(props) {
  return (
    <nav className='menu' onClick={(e) => props.toggleMenu(e)}>
      
      <a className="menu-item" target="#" >Home</a>
      <a className="menu-item" target="#">Services</a>
      <a className="menu-item" target="#">Our Works</a>
      <a className="menu-item" target="#">Clients</a>
      <a className="menu-item" target="#">Contact</a>
      
      <style jsx>{`
        .menu-item {
          margin: 0px 15px;
          font-size: 16px;
          font-weight: 500;
        }

        @media only screen and (min-width: 1200px) {
          .menu-item {
            margin: 0px 20px;
            font-size: 24px;
            font-weight: 500;
          }
        }

      `}</style>
    </nav>

  )
}

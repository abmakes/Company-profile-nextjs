
export default function Menu(props) {
  return (
    <nav className='menu' onClick={(e) => props.toggleMenu(e)}>
      <a className="menu-item" target="#" >Home</a>
      <a className="menu-item" target="#">Services</a>
      <a className="menu-item" target="#">Our Works</a>
      <a className="menu-item" target="#">Clients</a>
      <a className="menu-item" target="#">Contact</a>
    <style jsx>{`
      .menu {
        padding: 20px;
      }

      .menu-item {
        margin: 0px 20px;
      }
    `}</style>
    </nav>


  )
}

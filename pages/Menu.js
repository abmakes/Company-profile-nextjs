import styles from '../styles/Home.module.css'

export default function Menu(props) {
  return (
    <nav className={styles.menu} onClick={(e) => props.toggleMenu(e)}>
      <a target="#" >Home</a>
      <a target="#">Services</a>
      <a target="#">Our Works</a>
      <a target="#">Clients</a>
      <a target="#">Contact</a>
    </nav>
  )
}

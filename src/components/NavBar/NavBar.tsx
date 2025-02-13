import './NavBar.scss'

type NavBarProps = {
  logo: string
  buttons: string[]
}

const NavBar = ({ logo, buttons }: NavBarProps) => {
  return (
    <>
      {' '}
      <nav className="NavBar">
        {logo}
        {buttons.map((button) => (
          <button>{button.toString()}</button>
        ))}
      </nav>
    </>
  )
}

export default NavBar

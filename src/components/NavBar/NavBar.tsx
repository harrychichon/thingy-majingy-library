import './NavBar.scss'

type NavBarProps = {
  logo: boolean
  buttons: string[]
}

const NavBar = ({ logo, buttons }: NavBarProps) => {
  return (
    <>
      <nav className="NavBar">
        {logo && '🚀'}
        {buttons.map((button) => (
          <button key={button}>{button.toString()}</button>
        ))}
      </nav>
    </>
  )
}

export default NavBar
import './Button.scss'

type ButtonProps = {
  title: string
  icon: boolean
  handleClick: () => void
}

const Button = ({ title, icon, handleClick }: ButtonProps) => {
  return (
    <button className="Button" onClick={handleClick}>
      {icon && '🐨 '}
      {title}
    </button>
  )
}

export default Button
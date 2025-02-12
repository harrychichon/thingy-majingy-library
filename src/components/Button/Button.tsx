import './Button.scss'

type ButtonProps = {
  text: string
  icon: boolean
}

const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button>
      {text}
      {icon && '🐨'}
    </button>
  )
}

export default Button

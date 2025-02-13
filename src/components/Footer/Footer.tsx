import './Footer.scss'

type FooterProps = {
  text: string
  icon?: string
}

const Footer = ({ text, icon }: FooterProps) => {
  return (
    <footer className="Footer">
      {icon}
      {text}
    </footer>
  )
}

export default Footer

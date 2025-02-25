import './Heading.scss'

type HeaderProps = {
  title: string
}

const Heading = ({ title }: HeaderProps) => {
  return <h1 className="Heading">{title}</h1>
}

export default Heading

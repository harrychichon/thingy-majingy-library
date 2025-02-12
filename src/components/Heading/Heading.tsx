import './Heading.scss'

type HeaderProps = {
  title: string
  icon: string
}

const Heading = ({ title, icon }: HeaderProps) => {
  return (
    <h1 className="heading">
      {title}
      {icon}
    </h1>
  )
}

export default Heading

import './SubHeading.scss'

type SubHeadingProps = {
  text: string
}

const SubHeading = ({ text }: SubHeadingProps) => {
  return <h2 className="SubHeading">{text}</h2>
}

export default SubHeading

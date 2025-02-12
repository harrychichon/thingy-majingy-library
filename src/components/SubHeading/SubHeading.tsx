import './SubHeading.scss'

type SubHeadingProps = {
  text: string
}

const SubHeading = ({ text }: SubHeadingProps) => {
  return <h2 className="subHeading">{text}</h2>
}

export default SubHeading

import './IntroParagraph.scss'

type IntroParagraphProps = {
  text: string
}

const IntroParagraph = ({ text }: IntroParagraphProps) => {
  return <p>{text}</p>
}

export default IntroParagraph

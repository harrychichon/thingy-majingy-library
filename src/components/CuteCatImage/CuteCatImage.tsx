import './CuteCatImage.scss'

type CuteCatImageProps = {
  src: string
  alt: string
}

const CuteCatImage = ({ src, alt }: CuteCatImageProps) => {
  return <img className="CuteCatImage" src={src} alt={alt} />
}

export default CuteCatImage

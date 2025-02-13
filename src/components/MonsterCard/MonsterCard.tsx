import './MonsterCard.scss'

type MonsterCardProps = {
  imgSrc: string
  imgAlt: string
  name: string
  traits: string[]
}

const MonsterCard = ({ imgSrc, imgAlt, name, traits }: MonsterCardProps) => {
  return (
    <>
      <article className="MonsterCard">
        <h2>{name}</h2>
        <img src={imgSrc} alt={imgAlt} />
        <ul>
          {traits.map((trait) => (
            <li>{trait}</li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default MonsterCard

/* med bild på monster, dess namn och en punktlista med monstrets egenskape */

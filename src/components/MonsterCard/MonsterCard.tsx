import './MonsterCard.scss'

export type MonsterCardProps = {
  imgSrc: string
  imgAlt: string
  name: string
  traits: string[]
}

export const MonsterCard = ({
  imgSrc,
  imgAlt,
  name,
  traits,
}: MonsterCardProps) => {
  return (
    <>
      <article className="MonsterCard">
        <h2>{name}</h2>
        <img src={imgSrc} alt={imgAlt} />
        <ul>
          {traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default MonsterCard

/* med bild på monster, dess namn och en punktlista med monstrets egenskape */

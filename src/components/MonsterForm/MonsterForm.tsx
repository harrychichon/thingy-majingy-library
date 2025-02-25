import './MonsterForm.scss'

type MonsterFormProps = {
  image: string
  traits: string[]
}

const MonsterForm = ({ image, traits }: MonsterFormProps) => {
  return (
    <>
      <form action="" method="post" className="MonsterForm">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="image">Add an image</label>
        <input type="submit" value={image} />
        {traits.map((trait) => (
          <option value={trait} typeof=""></option>
        ))}
      </form>
    </>
  )
}

export default MonsterForm
import './Grid.scss'

type GridProps = {
  one: string
  two: string
  three: string
  four: string
  five: string
  six: string
}

const Grid = ({ one, two, three, four, five, six }: GridProps) => {
  return (
    <>
      <div className="Grid">
        <div className={one}></div>
        <div className={two}></div>
        <div className={three}></div>
        <div className={four}></div>
        <div className={five}></div>
        <div className={six}></div>
      </div>
    </>
  )
}

export default Grid

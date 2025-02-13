import './DropDown.scss'

type DropDownProps = {
  labelText: string
  labelFor: string
  selectName: string
  selectId: string
  items: string[]
}

const DropDown = ({
  labelText,
  labelFor,
  selectName,
  selectId,
  items,
}: DropDownProps) => {
  return (
    <>
      <div className="DropDownContainer">
        <label className="DropDownLabel" htmlFor={labelFor}>
          {labelText}
        </label>
        <select className="DropDownSelect" name={selectName} id={selectId}>
          {items.map((item) => (
            <option
              className="DropDownOption"
              value={item.toString().toLowerCase()}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default DropDown

import './DropDown.scss'


type DropDownProps = {
  labelText: string
  labelFor: string
  selectName: string
  selectId: string
  items: string[]
  parent?: ParentNode
  handleChange?: () => void
}

const DropDown = ({
  labelText,
  labelFor,
  selectName,
  selectId,
  items,
  handleChange,
}: DropDownProps) => {

  return (
    <>
      <div className="DropDownContainer">
        <label className="DropDownLabel" htmlFor={labelFor}>
          {labelText}
        </label>
        <select
          className="DropDownSelect"
          name={selectName}
          id={selectId}
          onChange={handleChange}
        >
          {items.map((item) => (
            <option
              key={item}
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

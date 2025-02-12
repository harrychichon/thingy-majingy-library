import './App.scss'
import Button from './components/Button/Button'
import DropDown from './components/DropDown/DropDown'
import Heading from './components/Heading/Heading'
import SubHeading from './components/SubHeading/SubHeading'

function App() {
  const demoDropDown: string[] = [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
    'Placeholder 4',
    'Placeholder 5',
  ]
  return (
    <>
      <Heading title="This is a heading" />
      <SubHeading text="This is a sub heading" />
      <Button text="With icon" icon={true} />
      <Button text="Without icon" icon={false} />
      <DropDown
        labelText="This is the label"
        labelFor="demo-drop-down"
        selectName="demo"
        selectId="demo-drop-down"
        items={demoDropDown}
      />
    </>
  )
}

export default App

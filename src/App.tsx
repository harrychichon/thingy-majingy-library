import './App.scss'
import Button from './components/Button/Button'
import CuteCatImage from './components/CuteCatImage/CuteCatImage'
import DropDown from './components/DropDown/DropDown'
import Footer from './components/Footer/Footer'
import Heading from './components/Heading/Heading'
import IntroParagraph from './components/IntroParagraph/IntroParagraph'
import MonsterCard from './components/MonsterCard/MonsterCard'
import NavBar from './components/NavBar/NavBar'
import SubHeading from './components/SubHeading/SubHeading'
import Grid from './components/Grid/Grid'

function App() {
  const navBarButtons: string[] = [
    'Button 1',
    'Button 2',
    'Button 3',
    'Button 4',
    'Button 5',
  ]
  const demoDropDown: string[] = [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
    'Placeholder 4',
    'Placeholder 5',
  ]
  const monsterTraits: string[] = ['Cunning', 'Stinky', 'Slow']

  return (
    <>
      <NavBar logo="🪀" buttons={navBarButtons} />
      <Heading title="This is a heading" />
      <SubHeading text="This is a sub heading" />
      <IntroParagraph text="This is a short intro paragraph to give the user a quick and brief understanding of the app." />
      <Button text="Button with icon" icon={true} />
      <Button text="Button without icon" icon={false} />
      <DropDown
        labelText="This is the label"
        labelFor="demo-drop-down"
        selectName="demo"
        selectId="demo-drop-down"
        items={demoDropDown}
      />
      <CuteCatImage
        src="https://imgs.search.brave.com/_TvmiMdUPln9OsLx1U9u8W0h5yaJoKd3iL_8d9ifsKI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzQyLzYxLzM0/LzM2MF9GXzEwNDI2/MTM0NjdfNjVDRDBG/SFlZNVE5WHg4OThS/eTBsUlRnT1lJZDFG/SkIuanBn"
        alt="This is an image of a super cute sleeping kitten."
      />
      <MonsterCard
        imgSrc="https://imgs.search.brave.com/oaCgBzYEAo7P7tXsDJjN8XpFcy0Salxp64Lbr6ly7_0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQyLzE5Lzcw/LzM2MF9GXzQyMTk3/MDY2X2FpZ2laZjFQ/NjBWVUI5WUtmcnR0/THE0R3hDYTFpWVQ5/LmpwZw"
        imgAlt="a-cunning-stinky-slow-monster"
        name="Stinka-Roo"
        traits={monsterTraits}
      />
      <Grid one="" two="" three="" four="" five="" six="" />
      <Footer text="This is a demo footer" />
    </>
  )
}
export default App

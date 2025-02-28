import './App.scss'
import Modal from './components/Modal/Modal.tsx';
import Button from './components/Button/Button.tsx';
import Counter from './components/Counter/Counter.tsx';
import CuteCatImage from './components/CuteCatImage/CuteCatImage.tsx';
import DropDown from './components/DropDown/DropDown.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import HighFrostGlassContainer
  from './components/Container/Glass/HighFrostGlassContainer/HighFrostGlassContainer.tsx';
import LowFrostGlassContainer
  from './components/Container/Glass/LowFrostGlassContainer/LowFrostGlassContainer.tsx';
import MidFrostGlassContainer
  from './components/Container/Glass/MidFrostGlassContainer/MidFrostGlassContainer.tsx';
import PokemonCard from './components/PokemonCard/PokemonCard.tsx';


function App() {

  const navBarButtons = ["Home", "Shop", "About", "Contact"]

  const dropDownArr = ["Placeholder", "Another placeholder", "Ooh," +
  " placeholder!", "SURPRISE! Placeholder", ]


const onClick = () => {
  window.alert('It worked!')
}


  return (
    <>
      <NavBar logo={false} buttons={navBarButtons} />
      <div className="PokemonCardCollection">
        <PokemonCard id={1} />
        <PokemonCard id={2} />
        <PokemonCard id={3} />
        <PokemonCard id={4} />
        <PokemonCard id={5} />
        <PokemonCard id={6} />
        <PokemonCard id={7} />
        <PokemonCard id={8} />
        <PokemonCard id={9} />
        <PokemonCard id={75} />
        <PokemonCard id={321} />
        <PokemonCard id={499} />

      </div>
      <h2>Glass components</h2>
      <div className="GlassShowcase">
        <HighFrostGlassContainer />
        <MidFrostGlassContainer />
        <LowFrostGlassContainer />
        <HighFrostGlassContainer />
        <MidFrostGlassContainer />
        <LowFrostGlassContainer />
      </div>
      <CuteCatImage src="https://imgs.search.brave.com/IUmjhBKCfG5_gtj41HB5k5E7scI6mdz_ezzBwIm22Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbi5i/Y2RuLmJpei9JbWFn/ZXMvMjAxOC82LzEy/LzYyMmJmMTE5LTE5/NzctNDJjYS05ZjVi/LWYxYzUwN2YxZTZh/Ny5qcGc" alt="The cutest cat you've ever... heard"/>
      <Modal modalContent={"Insert your content here." } openButtonText="Open modal" closeButtonText="Close" optionalButton1={true} optionalButton1Text="Opt 1" optionalButton2={true} optionalButton2Text="Opt 2" />
      <Button title="Button with icon" icon={true} handleClick={onClick}/>
      <Button title="Button without icon" icon={false} handleClick={onClick} />
      <Counter/>
      <DropDown labelText={"This is a dropdown."} labelFor={"Thingy"} selectName={"Thingy"} selectId={"thingy"} items={dropDownArr} />
    </>
  )
}
export default App
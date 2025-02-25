import './App.scss'
import Modal from './components/modal/Modal.tsx';
import Button from './components/Button/Button.tsx';
import Counter from './components/Counter/Counter.tsx';
import CuteCatImage from './components/CuteCatImage/CuteCatImage.tsx';
import DropDown from './components/DropDown/DropDown.tsx';
import NavBar from './components/NavBar/NavBar.tsx';


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
      <CuteCatImage src="https://imgs.search.brave.com/IUmjhBKCfG5_gtj41HB5k5E7scI6mdz_ezzBwIm22Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbi5i/Y2RuLmJpei9JbWFn/ZXMvMjAxOC82LzEy/LzYyMmJmMTE5LTE5/NzctNDJjYS05ZjVi/LWYxYzUwN2YxZTZh/Ny5qcGc" alt="The cutest cat you've ever... heard"/>
      <Modal modalContent={"Insert your content here." } openButtonText="Open modal" closeButtonText="Close" optionalButton1={true} optionalButton1Text="Opt 1" optionalButton2={true} optionalButton2Text="Opt 2" />
      <Button title="Button with icon" icon={true} handleClick={onClick}/>
      <Button title="Button without icon" icon={false} handleClick={onClick} />
      <Counter/>
      <DropDown labelText={"This is a dropdown."} labelFor={"Thingy"} selectName={"Thingy"} selectId={"thingy"} items={dropDownArr} />


      <CuteCatImage src="https://imgs.search.brave.com/IUmjhBKCfG5_gtj41HB5k5E7scI6mdz_ezzBwIm22Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbi5i/Y2RuLmJpei9JbWFn/ZXMvMjAxOC82LzEy/LzYyMmJmMTE5LTE5/NzctNDJjYS05ZjVi/LWYxYzUwN2YxZTZh/Ny5qcGc" alt="The cutest cat you've ever... heard"/><CuteCatImage src="https://imgs.search.brave.com/IUmjhBKCfG5_gtj41HB5k5E7scI6mdz_ezzBwIm22Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbi5i/Y2RuLmJpei9JbWFn/ZXMvMjAxOC82LzEy/LzYyMmJmMTE5LTE5/NzctNDJjYS05ZjVi/LWYxYzUwN2YxZTZh/Ny5qcGc" alt="The cutest cat you've ever... heard"/><CuteCatImage src="https://imgs.search.brave.com/IUmjhBKCfG5_gtj41HB5k5E7scI6mdz_ezzBwIm22Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbi5i/Y2RuLmJpei9JbWFn/ZXMvMjAxOC82LzEy/LzYyMmJmMTE5LTE5/NzctNDJjYS05ZjVi/LWYxYzUwN2YxZTZh/Ny5qcGc" alt="The cutest cat you've ever... heard"/>
    </>
  )
}
export default App
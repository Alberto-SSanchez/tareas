// "rafce" is the snippet to create a component
import Button from "./Button"

const Header = ({titulo, onAdd, mostrarForm}) => {

  const onClick = () => {
    console.log("Test")
  }

  return (
    <header className='header'>
        <h1>{titulo}</h1>
        <Button texto={mostrarForm ? 'Cerrar':'Agregar'} color={mostrarForm ? 'red' : 'green'} onClick={onAdd} / >
    </header>
  )
}

export default Header

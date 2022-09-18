import Header from './components/Header'
import Tareas from './components/Tareas'
import {useState} from 'react'

function App() {

  const [tareas, setTareas] = useState(
    [
        {
            id: 1, 
            texto: 'Ir al cine',
            fecha: '2 de Febrero de 2022',
            terminado: true
        },
        {
            id: 2, 
            texto: 'Comprar en el supermercado',
            fecha: '10 de Febrero de 2022',
            terminado: false
        },
        {
            id: 3, 
            texto: 'Hacer una app en React',
            fecha: '11 de Febrero de 2022',
            terminado: false
        }
    ]
)

  const borrarTarea = (id) => {
    setTareas( tareas.filter((tarea)=>
      tarea.id !== id
      ))
  }

  return (
    <div className = 'container'>
      <Header titulo = 'Tareas'/>
      {tareas.length > 0 ? <Tareas tareas = {tareas} onDelete = {borrarTarea}/> : 'No hay tareas para mostrar'}
    </div>
  )
}

export default App

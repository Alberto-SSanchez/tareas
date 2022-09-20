import { useState } from "react"

const AddTarea = ({onAdd}) => {

  const [texto, setTexto] = useState('')
  const [fecha, setFecha] = useState('')
  const [terminada, setTerminada] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!texto){
      alert('Agrega una descripción para la tarea')
      return
    }

    onAdd({texto, fecha, terminada})

    setTexto('')
    setFecha('')
    setTerminada(false)

  }

  return (
    <form className="add-form" action="" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Tarea</label>
            <input type="text" name="" id="" 
            placeholder="Agregar tarea" value={texto}
            onChange = { (e) => setTexto(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="">Fecha</label>
            <input type="text" name="" id="" placeholder="Fecha"
            value = {fecha}
            onChange = {(e) => setFecha(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Terminada</label>
            <input type="checkbox" name="" id=""
            checked = {terminada}
            onChange = { (e) => setTerminada(e.currentTarget.checked)}
            />
        </div>
        <input className="btn btn-block" type="submit" value="Guardar" />
    </form>
  )
}

export default AddTarea
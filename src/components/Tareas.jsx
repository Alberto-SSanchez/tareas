import Tarea from "./Tarea"

const Tareas = ({tareas, onDelete}) => {

    return (
        <>
            {tareas.map((tarea)=>(
                <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete}/>
            ))}
        </>
  )
}

export default Tareas
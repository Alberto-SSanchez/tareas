import {FaTimes} from 'react-icons/fa'

function Tarea({tarea, onDelete}) {
  return (
    <div className="tarea">
        <h3>{tarea.texto} <FaTimes onClick={() => onDelete(tarea.id)} style={{color:'red', cursor:'pointer'}}/> </h3>
        <p>{tarea.fecha}</p>
    </div>
  )
}

export default Tarea
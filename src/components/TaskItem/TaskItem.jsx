import React from 'react';
import './TaskItem.css'

const TaskItem = ({ setTareas, tareas }) => {

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: tarea.completada ? false : true } : tarea
      )
    );
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <><tbody>
      {tareas.map((tarea, indice) => (
        <tr key={indice}>
          <td className='item-list'>{tarea.nombre}</td>
          <td><p className='cartel-estado' onClick={() => completarTarea(tarea.id)}>{tarea.completada ? 'Completed' : 'pending'}</p></td>
          <td><p className='cerrar' onClick={() => borrarTarea(tarea.id)}>❌</p></td>
        </tr>
      ))}
    </tbody></>
  )
}

export { TaskItem }
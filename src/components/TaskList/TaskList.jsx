import React from 'react';
import './TaskList.css'
import { TaskItem } from '../TaskItem/TaskItem';

const TaskList = ({setTareas, tareas}) => {
    return(
        <><div className='div-list'>
        <h3 className='titulo-tabla'>Todo List</h3>
        <table className='tabla'>
          <thead>
            <tr>
              <th className='encabezado-list'>List</th>
              <th>Status</th>
              <th>Close</th>
            </tr>
          </thead>
            <TaskItem 
            tareas={tareas}
            setTareas={setTareas}
            />
        </table>
      </div></>
    )
}

export { TaskList }
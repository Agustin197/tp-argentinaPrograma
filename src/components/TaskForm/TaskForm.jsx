import React from 'react';
import { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({setTareas, tareas}) => {

    const [valorInput, setValorInput] = useState('');

    const handleInputChange = (e) => {
        setValorInput(e.target.value);
      }

    const agregarTarea = (e) => {
        e.preventDefault()
        if (valorInput.trim() !== '') {
          const nuevaTarea = {
            id: Date.now(),
            nombre: valorInput,
            completada: false,
          }
          setTareas([...tareas, nuevaTarea]);
          setValorInput('')
        }
      };

    return (
        <> <form className='form-add' onSubmit={(e) => agregarTarea(e)}>
            <input
                className='inputTarea'
                type="text"
                placeholder="What would you like to do?"
                value={valorInput}
                onChange={handleInputChange}
            />
            <button
                className='botonAdd'
                type='submit'
            >Add</button>
        </form></>
    )
}

export { TaskForm }
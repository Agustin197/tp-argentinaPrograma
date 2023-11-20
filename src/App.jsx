import React from 'react';
import { useState } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';

function App() {

  const [tareas, setTareas] = useState([]);

  return (
    <>
      <div className='div-titulo'>
        <h1 className='titulo'>TODO List</h1>
      </div>
      <div className='div-contenedor'>
        <TaskForm
          setTareas={setTareas}
          tareas={tareas}
        />
        <TaskList 
          setTareas={setTareas}
          tareas={tareas}
        />
      </div>
    </>
  );
}

export default App;
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';

function App() {

  const [tareas, setTareas] = useState([]);

 useEffect(() => {
  console.log(`La lista de tareas ha cambiado:`, tareas); 
 },[tareas]);


  return (
    <>
    <div className='container'>
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
          </div>
    </>
  );
}

export default App;
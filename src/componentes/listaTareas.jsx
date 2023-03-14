import React, { useState } from 'react';
import TareaComponent from './tarea';
import TareaForm from './tareaForm';

import '../styles/lista/listaTarStyles.css';

const ListaTareas = () => {

    const [tareas, setTareas] = useState([]);

    function crearTarea(tarea){
        console.log('Creando tarea: ', tarea);
        const temTareas = [...tareas];
        temTareas.push(tarea);
        setTareas(temTareas);
    }

    function eliminarTarea(tarea){
        console.log('Eliminando tarea: ', tarea);
        const index = tareas.indexOf(tarea);
        const temTareas = [...tareas];
        temTareas.splice(index, 1);
        setTareas(temTareas);
    }

    function actualizarTarea(tarea){
        console.log('Actualizando tarea:', tarea);
        const index = tareas.indexOf(tarea);
        const tempTareas = [...tareas];
        tempTareas[index].completed = !tempTareas[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTareas(tempTareas);
    }

    const Lista = () => {
        return(
            <ul>
                    { tareas.map((tarea, index) => {
                        console.log(index);
                            return (
                                <TareaComponent
                                key={index}
                                tarea={tarea}
                                eliminar={eliminarTarea}
                                actualizar={actualizarTarea}
                                >
                                </TareaComponent>
                            )
                        }
                    )}
            </ul>
        )
    }

    let tareasTable;

    if(tareas.length > 0){
        tareasTable = <Lista></Lista>
    }else{
        tareasTable = (
        <div>
            <h3>No tienes tareas</h3>
            <h4>Agregar una</h4>
        </div>
        )
    }

    return (
        <div className='contenido'>
            <h1>Tareas</h1>
            <div className='tabla'>
                {tareasTable}
            </div>
            <TareaForm add={crearTarea}></TareaForm>
        </div>
    );
}

export default ListaTareas;

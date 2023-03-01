import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../models/tarea.class';
import { Power, Trash } from 'react-bootstrap-icons';


const TareaComponent = ({ tarea, eliminar, actualizar }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${tarea.name} is going to unmount`);
        }
    }, [tarea]);

    const estado = (completado) => {
        let status = '';
        let style = '';

        if(completado === true || completado === 'true'){
            status = 'Completada';
            style = "green";
        }else if(completado === false || completado === 'false'){
            status = 'Pendiente';
            style = "red";
        }else{
            console.log('error');
        }

        return (
            <span style={{color: style, fontWeight: "bold" }}>{status}</span>
        );
    }

    return (
        <li>
            <p style={{fontWeight: "bold"}}>{tarea.name} {tarea.description} ({ estado(tarea.completed) }) <Power onClick={() => actualizar(tarea)} className='icono'></Power> <Trash onClick={() => eliminar(tarea)} className='icono'></Trash></p>
        </li>
    );
};


TareaComponent.propTypes = {
    tarea: PropTypes.instanceOf(Tarea).isRequired,
    eliminar: PropTypes.func.isRequired,
    actualizar: PropTypes.func.isRequired
};


export default TareaComponent;

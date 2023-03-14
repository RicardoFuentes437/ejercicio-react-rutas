import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react';
import Homepage from './componentes/homepage';
import Loginpage from './componentes/loginpage';
import Registerpage from './componentes/registerpage';
import ListaTareas from "./componentes/listaTareas";

function Routing(){

    const [logged, setLogged] = useState(false);

    function storeUser(usuario){
        console.log("Te has registrado " + usuario.name);
        setLogged(!logged);
    }

    function changeStatus(){
        setLogged(!logged);
        if(logged === true){
            console.log("Bienvenido");
        }else{
            console.log("Hasta pronto");
        }
    }

    return (
        <Router>
            <div>
                <aside>
                    <Link to='/'>|HOME|</Link>
                    { logged ? 
                        <div>
                            <Link to="tasks">TASKS</Link>
                            <Link to='/logout' onClick={changeStatus}>|LOGOUT|</Link>
                        </div>
                    :
                        <div>
                            <Link to='/login'>|LOGIN|</Link>
                            <Link to='/register'>|REGISTER|</Link>  
                        </div>
                    }
                </aside>

                <main>
                    <Routes>
                        <Route exact path='/' element={ <Homepage /> }></Route>
                        <Route path='/register' element={ <Registerpage register={storeUser}></Registerpage>}></Route>
                        <Route path='/login' element={ <Loginpage login={changeStatus}/> }></Route>
                        <Route path='/logout' element={ <Homepage /> }></Route>
                        <Route path='tasks' element={ <ListaTareas /> }></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default Routing;
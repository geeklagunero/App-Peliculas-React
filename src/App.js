import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import {useState} from 'react';


function App() {

    //pasamos este state por props a los componentes que lo neceseciten 
    //tanto la variable como la funcion que modifica el state
    const [listadoState, setListadoState] = useState([]);




  return (
    <div className="layout">
    {/* cabezera */}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1> Mis peliculas</h1>
    </header>

    {/* barra de navegacion */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* contenido principal */}
    <section className="content">
        {/* Aqui van las peliculas */}
       <Listado listadoState={listadoState} setListadoState={setListadoState}/>
    </section>

    {/* barra lateral */}
    <aside className="lateral">
        <Buscador />
       <Crear setListadoState={setListadoState}/>
    </aside>

    {/* pie de pagina */}
    <footer className="footer">
        &copy; App de peliculas <a href="http://geeklagunero.com">Geeklagunero</a>
    </footer>
</div>
  );
}

export default App;

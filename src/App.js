import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {
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
       <Listado />
    </section>

    {/* barra lateral */}
    <aside className="lateral">
        <Buscador />
       <Crear />
    </aside>

    {/* pie de pagina */}
    <footer className="footer">
        &copy; App de peliculas <a href="http://geeklagunero.com">Geeklagunero</a>
    </footer>
</div>
  );
}

export default App;

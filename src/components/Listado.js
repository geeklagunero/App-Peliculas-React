import React, {useEffect} from 'react'

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("peliculas"));
        setListadoState(peliculas);
    };

    useEffect(() => {
        console.log("Componentes de listado de peliculas cargado");
        conseguirPeliculas()
    }, []);


  return (
    <>
        {/* Aqui van las peliculas */}
        {listadoState != null ? listadoState.map(pelicula => {

            return (
                <article key={pelicula.id} className="peli-item">
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="description">{pelicula.descripcion}</p>
    
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            );
        }) : <p>No Hay peliculas para mostar</p>
    }
    </>
  )
}

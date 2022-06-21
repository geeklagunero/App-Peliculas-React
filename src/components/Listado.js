import React, {useEffect, useState} from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);
    const [editar, setEditar] = useState(0);

    const conseguirPeliculas = () => {
        //conseguir los elementos que ya tenemos en el almacenamiento local localStorage
        //JSON.parse trasforma un objeto json en un objetos de javascript
        let peliculas = JSON.parse(localStorage.getItem("peliculas"));
        setListadoState(peliculas);

        return peliculas;
    };

    const borrarPelicula = (id) => {
        //conseguir peliculas almacenadas
        let peliculas = conseguirPeliculas();

        //filtrar esas peliculas para que elimne el array que no quiero
        let peliculasFiltradas = peliculas.filter(peli => peli.id !== id);

        //guardar el estado del listado
        setListadoState(peliculasFiltradas);

        //actulizar el localStorage
        localStorage.setItem("peliculas", JSON.stringify(peliculasFiltradas));
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
    
                <button className="edit" onClick={() => setEditar(pelicula.id) }>Editar</button>
                <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Borrar</button>

                {/* Aparece el formulario al editar */}
                {editar === pelicula.id && <Editar pelicula={pelicula} conseguirPeliculas={conseguirPeliculas}/>}



            </article>
            );
        }) : <p>No Hay peliculas para mostar</p>
    }
    </>
  )
}
// ? <Crear pelicula={pelicula} setListadoState={setListadoState}/> : null
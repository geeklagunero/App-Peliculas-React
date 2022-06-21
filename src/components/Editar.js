import React from 'react'

export const Editar = ({pelicula, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
      e.preventDefault();

      //conseguir el target del evento (formulario)
      let target = e.target;

      //buscar el indice del objeto pelicula a actulizar
      const peliculas_lamacenadas = conseguirPeliculas();
      const indice = peliculas_lamacenadas.findIndex(pelicula => pelicula.id === id);

      //crear objeto con ase indice del objeto a actualizar
      let pelicula_actualizada =  {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }

      //actualizar el objeto pelicula con el indice
      peliculas_lamacenadas[indice] = pelicula_actualizada;

      //guardar el nuevo array de objetos en el localstroage
      //con el JSON.stringify transformamos el array de objetos a un string json
      localStorage.setItem("peliculas", JSON.stringify(peliculas_lamacenadas));

      //y actilizar estados
      setListadoState(peliculas_lamacenadas);
      setEditar(0);
    };


  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, pelicula.id)}>
            <input type="text" name='titulo' className='titulo_editado' defaultValue={pelicula.titulo}/>

            <textarea name="descripcion" defaultValue={pelicula.descripcion} className='descripcion_editada'></textarea>

            <input type="submit" className='editar' value="Actulizar" />
        </form>
    </div>
  )
}

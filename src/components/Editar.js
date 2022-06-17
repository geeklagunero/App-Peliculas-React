import React from 'react'

export const Editar = ({pelicula}) => {

    const titulo_componente = "Editar pelicula";


  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componente}</h3>
        <form>
            <input type="text" name='titulo' className='titulo_editado' defaultValue={pelicula.titulo}/>

            <textarea name="descripcion" defaultValue={pelicula.descripcion} className='descripcion_editada'></textarea>

            <input type="submit" className='editar' value="Actulizar" />
        </form>
    </div>
  )
}

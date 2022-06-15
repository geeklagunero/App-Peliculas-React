import React, {useState} from 'react'
import { GuardarEnLocalStorage } from '../helpers/GuardarEnLocalStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir pelicula";

  const [pelistate, setPelistate] = useState({
    titulo: "",
    descripcion: ""
  });

  //destruturacion del objeto pelistate
  const {titulo, descripcion} = pelistate;

  console.log(pelistate);


  const conseguirDatosForm = (e) => {
    e.preventDefault(); //para evitar qu ela pagina se recargue

    //conseguir los datos del formulario
    let target = e.target; //targer es todo el formulario
    let titulo = target.titulo.value; //con el name del input obtenemos el valor
    let descripcion = target.descripcion.value; //igual con el name de descripcion conseguimos su valor

    //crear el objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo: titulo, 
      descripcion: descripcion
    }

    //guardar la pelicula en el state
    setPelistate(peli);

    //actilizar el estado del listado principal
    setListadoState(elementos => [...elementos, peli]);

    //guardar en el almacenamiento local
    GuardarEnLocalStorage("peliculas", peli);

    // let peli = {
    //   id: new Date().getTime(),
    //   titulo, 
    //   descripcion
    // }
    //console.log(peli);
    //console.log(pelistate);
   };


  

  return (
    <div className="add">
    <h3 className="title">{tituloComponente}</h3>

    <strong>
      {(titulo && descripcion)  && "has creado la pelicula "  + titulo}
    </strong>

    <form onSubmit={conseguirDatosForm}> 
        <input type="text"
               id='titulo'
               name='titulo'
               placeholder="Titulo" />

        <textarea id="descripcion" 
                  name="descripcion"
                  placeholder="Descripcion"></textarea>

        <input type="submit" 
               id='save'
               value="Guardar" />
    </form>
</div>
  )
}

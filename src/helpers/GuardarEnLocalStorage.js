
export const GuardarEnLocalStorage = (clave, elemento) => {

    //conseguir los elementos que ya tenemos en el almacenamiento local localStorage
    //JSON.parse trasforma un objeto json en un objetos de javascript
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);
    //comporbar si es un array
    if(Array.isArray(elementos)){
      elementos.push(elemento);
    } else {
      //creamos un array con la nueva pelicula
      elementos = [elemento];
    }

    //guaramos en el localStorage
    //el JSON.stringify convierte un objeto de javascript en un objeto json
    localStorage.setItem(clave, JSON.stringify(elementos));

    //devolvemos el objeto guardado
    return elemento;
   };
document.querySelector('h1').textContent = "Challenge del amigo secreto";

let listamigos = []; //Se crea el espacio donde vamos a guardar los nombres de los amigos.

function agregarAmigo() { // Función que agrega un nombre a la lista. 
    let inputNombre = document.getElementById("amigo"); // Envia el cuadro de texto donde el usuario escribe el nombre.
    let nombre = inputNombre.value; // Toma y almacena en la variable el nombre ingresado.

    if (nombre === "") { // Si el usuario no escribió nada, va a lanzar un aviso.
        alert("Por favor, ingresa un nombre válido."); // Muestra una alerta si el usuario no ingresó un nombre válido. 
        return; // Impide que la función se ejecute para que no agregue un valor vacío.

    } else if (nombre[0] === " " || nombre[nombre.length - 1] === " ") { // Comprueba si hay espacios vacíos al principio o final del nombre. 
        alert("Escribe el nombre sin ningún espacio en blanco.");
    } else {
        listamigos.push(nombre); // Almacena el último nombre digitado en la última posición de la lista. 
        inputNombre.value = ""; // Desocupa el espacio donde se digita el nombre para que se pueda escribir otro. 
        mostrarLista(); // Llama a la función mostrarLista() para actualizar la lista en pantalla. 
    }
}

function mostrarLista() { // Función que actualiza la lista de amigos en pantalla.
    let lista = document.getElementById("listaAmigos"); // Busca la lista que tenemos de los nombres. 
    let nombrescritos = ""; // Inicializamos donde vamos a guardar los nombres. 
    
    if (listamigos.length > 0) { // Revisamos si ya tenemos algo guardado en la lista. 
        for (let i = 0; i < listamigos.length; i++) { // Empezamos a ubicar en posición los nombres. 
            nombrescritos += "<li>" + listamigos[i] + "</li>"; // Construimos el listado para que se vea en el navegador.
        }
    } else {
        nombrescritos = "<li>Aún no has agregado amigos. ¡Añade nombres a la lista!</li>"; // Muestra un mensaje en la lista si aún no se han agregado nombres. 
    }
    lista.innerHTML = nombrescritos; // Nos genera el listado que tenemos guardado en nombrescritos. 
}

function sortearAmigo() { // Función con la que elegimos el nombre entre los amigos. 
    if (listamigos.length === 0) { // Comprueba que tengamos algo almacenado para hacer la elección. 
        alert("Agrega nombres de amigos para poder elegir uno."); // Aviso. 
        return; // No hace nada porque no tiene datos. 
    }
    
    let eleccionalazar = Math.floor(Math.random() * listamigos.length); // Revisa el tamaño de la lista para elegir una posición con la función Math le asigna un valor númerico a cada nombre.         
    let amigoElegido = listamigos[eleccionalazar]; // Elige el nombre dentro de la lista.     
    let resultado = document.getElementById("resultado"); // Busca el nombre dentro de la lista que vamos a mostrar. 
    resultado.innerHTML = `<li>El nombre de tu amigo secreto es: <strong>${amigoElegido}</strong></li>`; // Imprime en la pantalla el nombre elegido.
}
const URL = 'https://juanpink.github.io/movies-250.json';

let peliculas;
let peliculasFiltradas;

function generateCard(pelicula) {
    //1. Crear la Tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class","card");

    //2. Crear la Imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    //3. Crear el contenido de la Tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class","card-content");
    nuevaCard.appendChild(nuevoContenido);

    //4. Crear el Título
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    //5. Crear el Director
    const nuevoParrafoDirector = document.createElement("p");
    const nuevaNegrita = document.createElement("strong");
    nuevoParrafoDirector.appendChild(nuevaNegrita);
    nuevaNegrita.textContent = "Director : ";
    nuevoContenido.appendChild(nuevoParrafoDirector);
    const textoDirector = document.createTextNode(pelicula.Director)
    nuevoParrafoDirector.appendChild(textoDirector);

    //6. Crear el Año
    const nuevoAnyo = document.createElement("p");
    const nuevoAnyoNegrita = document.createElement("strong");
    nuevoAnyo.appendChild(nuevoAnyoNegrita);
    nuevoAnyoNegrita.textContent = "Año : ";
    nuevoContenido.appendChild(nuevoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year);
    nuevoAnyo.appendChild(textoAnyo);

    //7. Crear el Género
    const nuevoGenero = document.createElement("p");
    const nuevoGeneroSpan = document.createElement("span");
    nuevoGeneroSpan.setAttribute("class", "genre");
    nuevoGenero.appendChild(nuevoGeneroSpan);
    nuevoGeneroSpan.textContent = "Género : ";
    nuevoContenido.appendChild(nuevoGenero);
    const textoGenero = document.createTextNode(pelicula.Genre);
    nuevoGenero.appendChild(textoGenero);

    //8. Poner la duración
    nuevoContenido.innerHTML += pelicula.Runtime; 

    //Agregamos el div al contenedor
    document.querySelector("#container").appendChild(nuevaCard);
}

function processMovie(data) {
    //console.log(data);

    peliculas = data.movies;
    peliculasFiltradas = data.movies;

    crearConjuntoGeneros(peliculas);

    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });
}

function clearCards(){
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card=>card.remove());//Elegante
}

function crearConjuntoGeneros(peliculas) {
    const setGeneros = new Set();

    peliculas.forEach(pelicula => {
        //por cada string de generos
        const generos = pelicula.Genre.split(",").map(genero => genero.trim());
        generos.forEach(genero => setGeneros.add(genero));
    });

    const listaSelect = document.querySelector("#s-genero");
    listaSelect.innerHTML = "";
    for (let genero of setGeneros) {
        listaSelect.innerHTML += `<option value="${genero}">${genero}</option>`
    }
}

doGetRequest(URL, processMovie);
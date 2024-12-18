//Buscar por título
filtrarPeliculas("#b-titulo", "click", "#t-titulo", "Title");

//Buscar por Actor
filtrarPeliculas("#b-actor", "click", "#t-actor", "Actors");

//Buscar por género directamente al seleccionar de la lista
filtrarPeliculas("#s-genero", "change", "#s-genero", "Genre");

//Buscar por año
filtrarPeliculas("#b-anyo", "click", "#t-anyo", "Year");

function filtrarPeliculas(idElementoListener, evento, idElementoBusqueda, nombreAtributoBusqueda) {
    document.querySelector(idElementoListener).addEventListener(evento, () => {   
        clearCards();
        const textoBusqueda = document.querySelector(idElementoBusqueda).value;
        peliculasFiltradas =
            peliculas.filter(pelicula =>
                pelicula[nombreAtributoBusqueda]
                    .toUpperCase()
                    .includes(textoBusqueda.trim().toUpperCase()));
        peliculasFiltradas.map(generateCard);
    });
}


//Ordenar películas
document.querySelector("#b-ordenar").addEventListener("click", () => {
    clearCards();

    const orden = document.querySelector('input[name="ordenar"]:checked').value;

    const pelis = [].concat(peliculasFiltradas);
    //const pelis = Array.from(peliculasFiltradas);

    const peliculasOrdenadas = pelis.sort((p1, p2) => {
        const pDuracion1 = parseInt(p1.Runtime.split(" ")[0]);
        const pDuracion2 = parseInt(p2.Runtime.split(" ")[0]);

        if (orden === "ascendente") {
            return pDuracion1 - pDuracion2;
        }
        return pDuracion2 - pDuracion1;
    });
    peliculasOrdenadas.forEach(pelicula => {
        generateCard(pelicula);
    });
    
});

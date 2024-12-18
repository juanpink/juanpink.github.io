//Buscar por título
document.querySelector("#b-titulo").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-titulo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Title
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});
/*
//Se busca por cada pulsación
document.querySelector("#t-titulo").addEventListener("input", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-titulo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Title
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});
*/

//Buscar por Actor
document.querySelector("#b-actor").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-actor").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Actors
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});

//Buscar por género
document.querySelector("#b-genero").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#s-genero").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Genre
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});

//Buscar por año
document.querySelector("#b-anyo").addEventListener("click", () => {
    //console.log(document.querySelector("#s-genero").value);

    clearCards();
    const textoBusqueda = document.querySelector("#t-anyo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Year
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});

//Ordenar películas
document.querySelector("#b-ordenar").addEventListener("click", () => {
    //console.log(document.querySelector('input[name="ordenar"]:checked').value);

    clearCards();

    const orden = document.querySelector('input[name="ordenar"]:checked').value;

    /*
    const runtime = "142 min";
    console.log("Tiempo" + runtime.split(" ")[0] + " Tipo " + typeof(runtime.split(" ")[0]));
    console.log("Numero" + parseInt(runtime.split(" ")[0]) + " Tipo " + typeof(parseInt(runtime.split(" ")[0])));
    */

    const pelis = [].concat(peliculas);
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
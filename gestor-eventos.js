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
    console.log(document.querySelector("#r-asc").value);
});
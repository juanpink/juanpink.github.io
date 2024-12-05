function ocultarTodos() {
    document.querySelectorAll(".juego").forEach((juego) => {
        juego.style.display="None";
    });
}

function mostrar(plataforma) {
    document.querySelectorAll("." + plataforma).forEach((juego) => {
        juego.style.display="Block";
    });
}

document.querySelector("#boton-play").addEventListener("click", () => {
    ocultarTodos();

    mostrar("play");
});

document.querySelector("#boton-xbox").addEventListener("click", () => {
    ocultarTodos();

    mostrar("xbox");
});

document.querySelector("#boton-nintendo").addEventListener("click", () => {
    ocultarTodos();

    mostrar("nintendo");
});

document.querySelector("#boton-todos").addEventListener("click", () => {
    mostrar("juego");
});

document.querySelector("#consola").addEventListener("change", () => {
    ocultarTodos();

    mostrar(document.querySelector("#consola").value);
});
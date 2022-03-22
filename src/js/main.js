// AJAX y FETCH
let links = document.querySelectorAll('li a');
const myPage = document.querySelector('#myPage');

const pedirPagina = (e) => {
    e.preventDefault();
    let url = `${e.target.dataset.page}.html`
    fetch(url)
        .then(page => {
            page.text()
            .then((pagina) => {
                myPage.innerHTML = pagina;
            })
        })
}

for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener("click", pedirPagina);   
}

// Evento para recargar la página al darle clic al logo
let logo = document.querySelector('.logo');

logo.addEventListener ('click', () => {
    sessionStorage.removeItem("Numeros");
    sessionStorage.removeItem("Jugador");
    location.reload();
})

// Variables
const choices = [];

let player = "";
let welcome = document.querySelector(".form")
let formulario = document.querySelector("#form");
let input = document.querySelector("#name");
let valorIngresado = "";
let button = document.querySelector(".button");
let buttonInicio = document.querySelector("#inicioDeLaAventura");
let story = document.querySelector("#story");

// Evento para que el botón reciba el nombre del jugador.
input.addEventListener("keyup", (e) => {
    let textoIngresado = e.target.value;
    buttonInicio.innerHTML = `¡Comencemos, ${textoIngresado}!`
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

// Evento para enviar los datos del jugador al sessionStorage. El evento DESENCADENA el resto del código.
buttonInicio.addEventListener("click", () => {
    valorIngresado = input.value;
    input.value = "";
    sessionStorage.setItem('Jugador', valorIngresado);
    player = sessionStorage.getItem('Jugador');

    // operador Ternario
    player !== ""
    ? (welcome.style.display = "none", story.style.display = "flex", showPart1())
    : Swal.fire({
        icon: 'error',
        title: '¡Espera!',
        text: 'Introduce tu nombre para que la historia tenga sentido',
    });
})


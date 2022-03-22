// Parte 20-Dejar de intentarlo, lleva a las partes 24 y 25
const showPart20 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">PARTE 20</p>
        <div class="options">
            <button id="option15" class="optionButton">opción A</button>
            <button id="option16" class="optionButton">opción B</button>
        </div>
    </div>`

    let option15Button = document.querySelector("#option15");
    option15Button.addEventListener("click", () => {
        choices.push(option15Button.textContent);
        story.innerHTML = ``;
        showPart24();
    })

    let option16Button = document.querySelector("#option16");
    option16Button.addEventListener("click", () => {
        choices.push(option16Button.textContent);
        story.innerHTML = ``;
        showPart25();
    })
}

// Parte 21-Pedir ayuda, lleva a las partes 26 y 27
const showPart21 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">PARTE 21</p>
        <div class="options">
            <button id="option17" class="optionButton">opción A</button>
            <button id="option18" class="optionButton">opción B</button>
        </div>
    </div>`

    let option17Button = document.querySelector("#option17");
    option17Button.addEventListener("click", () => {
        choices.push(option17Button.textContent);
        story.innerHTML = ``;
        showPart26();
    })

    let option18Button = document.querySelector("#option18");
    option18Button.addEventListener("click", () => {
        choices.push(option18Button.textContent);
        story.innerHTML = ``;
        showPart27();
    })
}

// Parte 22-Actuar con confianza, lleva a las partes 28 y 29
const showPart22 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">PARTE 22</p>
        <div class="options">
            <button id="option19" class="optionButton">opción A</button>
            <button id="option20" class="optionButton">opción B</button>
        </div>
    </div>`

    let option19Button = document.querySelector("#option19");
    option19Button.addEventListener("click", () => {
        choices.push(option19Button.textContent);
        story.innerHTML = ``;
        showPart28();
    })

    let option20Button = document.querySelector("#option20");
    option20Button.addEventListener("click", () => {
        choices.push(option20Button.textContent);
        story.innerHTML = ``;
        showPart29();
    })
}

// Parte 23-Actuar con rechazo, lleva a las partes 30 y 31
const showPart23 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">PARTE 23</p>
        <div class="options">
            <button id="option21" class="optionButton">opción A</button>
            <button id="option22" class="optionButton">opción B</button>
        </div>
    </div>`

    let option21Button = document.querySelector("#option21");
    option21Button.addEventListener("click", () => {
        choices.push(option21Button.textContent);
        story.innerHTML = ``;
        showPart30();
    })

    let option22Button = document.querySelector("#option22");
    option22Button.addEventListener("click", () => {
        choices.push(option22Button.textContent);
        story.innerHTML = ``;
        showPart31();
    })
}

// FINAL
const showEnd = () => {
    // Prueba con SWAL
    Swal.fire({
        icon: 'warning',
        title: 'FIN DEL JUEGO',
        text: "¿Qué deseas hacer?",
        showCancelButton: true,
        confirmButtonColor: '#3E065F',
        cancelButtonColor: '#8E05C2',
        confirmButtonText: 'Ver mis elecciones',
        confirmButtonColor: '#700B97',
        cancelButtonText: 'Jugar de nuevo'
    }).then((result) => {
        if (result.isConfirmed) {
            myChoices();
        } else {
            sessionStorage.removeItem("Numeros");
            sessionStorage.removeItem("Jugador");
            location.reload();
        }
    })
}



// DECISIONES
const myChoices = () => {
    choices.forEach(el => {
        story.textContent += `${el},`;
    });
}
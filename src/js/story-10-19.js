// Parte 10-Entre 1000 y 4999, lleva a la parte 16.
const showPart10 = () => {
    let yourNumber = sessionStorage.getItem('Numeros');
    story.innerHTML = `
    <div class="boxText">
        <p class="text">El número <b><u>${yourNumber}</b></u> aparece en la pequeña pantallita del dispositivo y <b>una luz verde</b> se enciende en el costado del mismo.
        </p>
        <div class="options">
            <button id="next6" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next6");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart16();
    })
}

// Parte 11-Entre 5000 y 9999, lleva a la parte 17.
const showPart11 = () => {
    let yourNumber = sessionStorage.getItem('Numeros');
    story.innerHTML = `
    <div class="boxText">
        <p class="text">El número <b><u>${yourNumber}</b></u> aparece en la pequeña pantallita del dispositivo y <b>una luz roja</b> se enciende en el costado del mismo.
        </p>
        <div class="options">
            <button id="next7" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next7");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart17();
    })
}

// Parte 14-Siguiente..., lleva a la parte 10 y 11.
const showPart14 = () => {

    // Elimina cualquier registro de números previos.
    sessionStorage.removeItem("Numeros");

    story.innerHTML = `
    <div class="boxText">
        <p class="text">
        -Ni idea -le respondes con sinceridad -Al parecer nos han encerrado aquí.
        <br><br>
        -Hay que ayudarla antes de que despierte, o se llevará el susto de su vida.
        <br><br>
        Miras a <b>Roma</b>, que parece decidida a ayudarla. Los tres se acercan como pueden hasta la desconocida e inspeccionan la bolsa. Ya más cerca, logras ver detalles que antes no veías. La bolsa es más sofisticada de lo que parecía. Detrás, en la parte de la nuca, tiene un <b>tubo con un líquido de color amarillo</b> que baila de acá para allá. Intentas quitarle la bolsa, pero notas que <b>un pequeño dispositivo atado a un candado te impide removerla</b>.
        <br><br>
        El dispositivo se enciende. Tiene una pantalla diminuta y a sus lados unos botones que, al presionarlos, muestran dígitos en la pantalla; <b><u>hay lugar para cuatro</b></u>. Decides probar con un número al azar para ver qué sucede.
        </p>
        <div id="input-numbers-option2" class="options">
            <input type="number" id="inputNumbers2" class="optionButton" name="code">
            <button id="inputButton2" class="optionButton" type="submit">Introducir los números</button>
        </div>
    </div>`

    let inputNumbers2 = document.querySelector('#inputNumbers2'); // El input
    let inputButton2 = document.querySelector('#inputButton2'); // El botón

    inputNumbers2.addEventListener("keyup", (e) => {
        let numbersYouEntered = e.target.value;
        inputButton2.innerHTML = `Introducir los números ${numbersYouEntered}`;
        sessionStorage.setItem('Numeros', numbersYouEntered);
    })

    inputButton2.addEventListener("click", () => {
        let yourNumber = sessionStorage.getItem('Numeros');

        //Operador lógico AND
        yourNumber >= 1000 && yourNumber < 5000 && showPart10();
        yourNumber >= 5000 && yourNumber <= 9999 && showPart11();
        yourNumber < 1000 && showPart15();
    });
}

// Parte 15-Luz amarilla, lleva a las partes 10, 11 o 15.
const showPart15 = () => {

    // Elimina cualquier registro de números previos.
    sessionStorage.removeItem("Numeros");
    
    story.innerHTML = `
    <div class="boxText">
        <p class="text">Colocas el código y <b>una luz amarilla parpadea</b> justo al lado del dispositivo. <i>"Si hay lugar para cuatro dígitos, seguro tengan que ser <u>cuatro dígitos</u>"</i>, piensas.
        <br><br>
        Vuelves a intentarlo.
        </p>
        <div id="input-numbers-option3" class="options">
            <input type="number" id="inputNumbers3" class="optionButton" name="code">
            <button id="inputButton3" class="optionButton" type="submit">Introducir los números</button>
        </div>
    </div>`

    let inputNumbers3 = document.querySelector('#inputNumbers3'); // El input
    let inputButton3 = document.querySelector('#inputButton3'); // El botón

    inputNumbers3.addEventListener("keyup", (e) => {
        let numbersYouEntered = e.target.value;
        inputButton3.innerHTML = `Introducir los números ${numbersYouEntered}`;
        sessionStorage.setItem('Numeros', numbersYouEntered);
    })

    inputButton3.addEventListener("click", () => {
        let yourNumber = sessionStorage.getItem('Numeros');

        //Operador lógico AND
        yourNumber >= 1000 && yourNumber < 5000 && showPart10();
        yourNumber >= 5000 && yourNumber <= 9999 && showPart11();
        yourNumber < 1000 && showPart15();
    });
}


// Parte 16-Luz verde, lleva a las partes 18 y 19.
const showPart16 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text"><b>El candado que encerraba la bolsa de la chica se desprende enseguida</b>.
        <br><br>
        - ¿Cómo sabías que era ese el código? -te pregunta Héctor.
        <br><br>
        - Puse un número cualquiera.
        <br><br>
        Tu respuesta no lo deja satisfecho y se le nota en la cara, pero ahora mismo no hay tiempo para sospechar los unos de los otros. <b>Le remueves la bolsa a la chica y descubres algo que te perturba aún más</b>. Tu estómago se revuelve y te obliga a soltarla y alejarte.
        <br><br>
        - ¿Qué...? -Roma observa a la chica, o lo que queda de ella -¡Oh, Dios!
        <br><br>
        <b>El rostro de la joven está completamente desfigurado</b>. Uno de los ojos se ha perdido en quién sabe donde y en la frente tiene tajos profundos.
        <br><br>
        - Está muerta -remarca Héctor, como si no fuera algo obvio.
        <br><br>
        <i>"Estoy perdiendo el tiempo, tengo que salir cuanto antes de acá"</i>. Sabes que hay que empezar a investigar. Tienes dos opciones: podrías <u>inspeccionar la habitación</u> para ver si hay algún detalle que se te haya pasado por alto, o bien, la segunda opción, que es más desagradable pero podría darte más respuestas, <u>inspeccionar el cadáver</u>.
        </p>
        <div class="options">
            <button id="option9" class="optionButton">Inspeccionar la habitación</button>
            <button id="option10" class="optionButton">Inspeccionar el cadáver</button>
        </div>
    </div>`

    let option9Button = document.querySelector("#option9");
    option9Button.addEventListener("click", () => {
        choices.push(option9Button.textContent);
        story.innerHTML = ``;
        showPart18();
    })

    let option10Button = document.querySelector("#option10");
    option10Button.addEventListener("click", () => {
        choices.push(option10Button.textContent);
        story.innerHTML = ``;
        showPart19();
    })
}

// Parte 17-Luz roja, lleva al FIN
const showPart17 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text"><b>El dispositivo comienza a emitir una alarma desde los mini parlantes de detrás</b>.
        <br><br>
        - ¿Qué está pasando? -pregunta Roma.
        <br><br>
        - <b>La has cagado, ${player}</b> -te reprocha Héctor, mientras se levanta y se aleja hacia una esquina de la habitación. Lo sigues con la mirada, pero un ruido proveniente de la mujer con la bolsa en la cabeza te llama la atención. <b>El pequeño tubo con el líquido amarillo comienza a desprender un humo del mismo color</b>.
        <br><br>
        - Mierda, mierda, mierda -no deja de repetir Roma -¡ESO NO PUEDE SER BUENO!
        <br><br>
        En efecto, no es nada bueno. Comienzas a ver borroso, las paredes se mueven y tus manos se deforman delante de tus ojos.
        <br><br>
        <i>"¿Qué me está pasando?"</i>. Le diriges una última mirada a Roma, que yace en el suelo con la nariz llena de sangre y los ojos abiertos inyectados en rojo. Te tocas tu propia nariz y te das cuenta que también te está sangrando.
        <br><br>
        - Confíaba en ti, ${player}. Mi equipo estará muy decepcionado -Héctor está detrás tuya con una máscara de gas.
        <br><br>
        <i>"No puedo morir aquí, no así, por favor"</i>.
        </p>
        <div class="options">
            <button id="theEnd1" class="optionButton">HAS MUERTO</button>
        </div>
    </div>`
    
    let theEnd1 = document.querySelector("#theEnd1");
    theEnd1.addEventListener("click", () => {
        story.innerHTML = ``;
        showEnd();
    })
}

// Parte 18-Inspeccionar la habitación, lleva a las partes 20 y 21
const showPart18 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">No quieres saber absolutamente más nada con el cuerpo sin vida de aquella mujer, por lo que te pones de pie a duras penas y comienzas a moverte por el cuadrado en el que los tienen encerrados. Miras hacia arriba, hacia abajo, a izquierda y derecha; todas las paredes son idénticas.
        <br><br>
        Todas, menos una.
        <br><br>
        En una de las paredes hay una pequeña puerta metálica. Tiene un tamaño inusual, ya que sólo se podría pasar por ella gateando. Ves que tiene una manija e intentas tirar de ella, pero no hay caso: no se mueve.</p>
        <div class="options">
            <button id="option11" class="optionButton">Dejar de intentarlo</button>
            <button id="option12" class="optionButton">Pedir ayuda</button>
        </div>
    </div>`

    let option11Button = document.querySelector("#option11");
    option11Button.addEventListener("click", () => {
        choices.push(option11Button.textContent);
        story.innerHTML = ``;
        showPart20();
    })

    let option12Button = document.querySelector("#option12");
    option12Button.addEventListener("click", () => {
        choices.push(option12Button.textContent);
        story.innerHTML = ``;
        showPart21();
    })
}

// Parte 19-Inspeccionar el cadáver, lleva a las partes 22 y 23
const showPart19 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">El escenario es demasiado desagradable, pero crees fervientemente que si hay alguna pista que te ayudará a escapar de ese lugar, estará en el cadáver de aquella mujer.
        <br><br>
        Sin prestar mucha atención a sus heridas, comienzas a palparle el cuerpo, en busca de cualquier cosa extraña.
        <br><br>
        - ¿Qué estás haciendo? -pregunta Roma, con una mezcla de asco e intriga en su voz.</p>
        <div class="options">
            <button id="option13" class="optionButton">Actuar con confianza</button>
            <button id="option14" class="optionButton">Actuar con rechazo</button>
        </div>
    </div>`

    let option13Button = document.querySelector("#option13");
    option13Button.addEventListener("click", () => {
        choices.push(option13Button.textContent);
        story.innerHTML = ``;
        showPart22();
    })

    let option14Button = document.querySelector("#option14");
    option14Button.addEventListener("click", () => {
        choices.push(option14Button.textContent);
        story.innerHTML = ``;
        showPart23();
    })
}

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
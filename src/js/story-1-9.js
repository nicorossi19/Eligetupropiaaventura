// Parte 1-Inicio, lleva a las partes 2, 3, 4 o 5.
const showPart1 = () => {
    player = sessionStorage.getItem('Jugador');
    story.innerHTML = `
    <div class="boxText">
        <p class="text">Te despiertas con un sobresalto. Miras a tu alrededor y ves a otras tres personas dormidas: <b>una mujer de cabello rubio ceniza</b>, <b>un hombre afroamericano con una marca sospechosa que le rodea el cuello</b> y <b>una segunda mujer con una bolsa en la cabeza</b>. Los tres parecen estar tan dormidos como lo estabas tú hasta hace unos segundos; no se mueven. Podrías acercarte a cualquiera de ellos e intentar despertarlos, <u>preguntar qué ha pasado</u>, aunque seguramente estén tan desinformados como tú, o podrías <u>quedarte en tu lugar</u> y simplemente esperar a que se levanten por su propia cuenta.</p>
        <div class="options">
            <button id="option1" class="optionButton">Acercarse a la rubia</button>
            <button id="option2" class="optionButton">Acercarse al afroamericano</button>
            <button id="option3" class="optionButton">Acercarse a la chica de la bolsa</button>
            <button id="option4" class="optionButton">No hacer nada</button>
        </div>
    </div>`

    let option1Button = document.querySelector("#option1");
    option1Button.addEventListener("click", () => {
        choices.push(option1Button.textContent);
        story.innerHTML = ``;
        showPart2();
    })

    let option2Button = document.querySelector("#option2");
    option2Button.addEventListener("click", () => {
        choices.push(option2Button.textContent);
        story.innerHTML = ``;
        showPart3();
    })

    let option3Button = document.querySelector("#option3");
    option3Button.addEventListener("click", () => {
        choices.push(option3Button.textContent);
        story.innerHTML = ``;
        showPart4();
    })

    let option4Button = document.querySelector("#option4");
    option4Button.addEventListener("click", () => {
        choices.push(option4Button.textContent);
        story.innerHTML = ``;
        showPart5();
    })
}



// Parte 2-La mujer rubia, lleva a las partes 6 o 7.
const showPart2 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">Cuando te intentas levantar, te das cuenta que las piernas no te responden como deberían hacerlo. <b>¿Te han drogado?</b> Te cuesta ponerte de pie, así que intentas arrastrarte hasta la mujer que tienes más cerca: <b>la de cabello rubio</b>. Pones un dedo por debajo de sus fosas nasales y sientes la respiración; pareciera estar bien.
        <br><br>
        - ¿Hola? -pero no obtienes ninguna respuesta.
        <br><br>
        Te preocupa que no despierte. Piensas cómo podrías hacerlo, pero realmente nunca tuviste buen tacto con las personas, así que lo único que se te ocurre es <u>sacudirla suavemente</u> o bien, en mayor medida, <u>darle una bofetada</u> para que reaccione.</p>
        <div class="options">
            <button id="option5" class="optionButton">Sacudirla suavemente</button>
            <button id="option6" class="optionButton">Darle una bofetada</button>
        </div>
    </div>`

    let option5Button = document.querySelector("#option5");
    option5Button.addEventListener("click", () => {
        choices.push(option5Button.textContent);
        story.innerHTML = ``;
        showPart6();
    })

    let option6Button = document.querySelector("#option6");
    option6Button.addEventListener("click", () => {
        choices.push(option6Button.textContent);
        story.innerHTML = ``;
        showPart7();
    })
}

// Parte 3-El afroamericano, lleva a las partes 8 o 9.
const showPart3 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">Cuando te intentas levantar, te das cuenta que las piernas no te responden como deberían hacerlo. <b>¿Te han drogado?</b> Te cuesta ponerte de pie, así que decides acercarte a rastras hasta el hombre que está justo al lado de la mujer rubia. Llegas hasta él y apoyas una mano sobre su pecho.
        <br><br>
        <i>"Respira"</i>.
        <br><br>
        De repente, <b>el hombre abre los ojos y te agarra de la muñeca con fuerza</b>. Te sobresaltas, pero no te alejas.
        <br><br>
        - ¿Quién eres? ¿Dónde estoy? ¿Qué ha pasado?- Te inunda con preguntas a las cuales no sabes responder.
        </p>
        <div class="options">
            <button id="option7" class="optionButton">"No sé"</button>
            <button id="option8" class="optionButton">"Nos drogaron"</button>
        </div>
    </div>`

    let option7Button = document.querySelector("#option7");
    option7Button.addEventListener("click", () => {
        choices.push(option7Button.textContent);
        story.innerHTML = ``;
        showPart8();
    })

    let option8Button = document.querySelector("#option8");
    option8Button.addEventListener("click", () => {
        choices.push(option8Button.textContent);
        story.innerHTML = ``;
        showPart9();
    })
}

// Parte 4-La chica de la bolsa, lleva a las partes 10, 11 o 15.
const showPart4 = () => {
    // Elimina cualquier registro de números previos.
    sessionStorage.removeItem("Numeros");

    story.innerHTML = `
    <div class="boxText">
        <p class="text">Cuando te intentas levantar, te das cuenta que las piernas no te responden como deberían hacerlo. <b>¿Te han drogado?</b> Te cuesta ponerte de pie, así que decides acercarte a rastras hasta <b>la mujer con la bolsa en la cabeza</b>; te llama poderosamente la atención. <i>"¿Por qué ella tiene una bolsa que le cubre el rostro y nosotros no?"</i>, piensas.
        <br><br>
        Ya más cerca, logras ver detalles que antes no veías. La bolsa es más sofisticada de lo que parecía. Detrás, en la parte de la nuca, <b>tiene un tubo con un líquido de color amarillo</b> que baila de acá para allá. Intentas quitarle la bolsa, pero notas que <b>un pequeño dispositivo atado a un candado te impide removerla</b>.
        <br><br>
        El dispositivo se enciende. Tiene una pantalla diminuta y a sus lados unos botones que, al presionarlos, muestran dígitos en la pantalla; <b><u>hay lugar para cuatro</b></u>. Decides probar con un número al azar para ver qué sucede.
        </p>
        <div id="input-numbers-option" class="options">
            <input type="number" id="inputNumbers" class="optionButton" name="code">
            <button id="inputButton" class="optionButton" type="submit">Introducir los números</button>
        </div>
    </div>`
    
    let inputNumbers = document.querySelector('#inputNumbers'); // El input
    let inputButton = document.querySelector('#inputButton'); // El botón

    inputNumbers.addEventListener("keyup", (e) => {
        let numbersYouEntered = e.target.value;
        inputButton.innerHTML = `Introducir los números ${numbersYouEntered}`;
        sessionStorage.setItem('Numeros', numbersYouEntered);
    })

    inputButton.addEventListener("click", () => {
        let yourNumber = sessionStorage.getItem('Numeros');

        //Operador lógico AND
        yourNumber >= 1000 && yourNumber < 5000 && showPart10();
        yourNumber >= 5000 && yourNumber <= 9999 && showPart11();
        yourNumber < 1000 && showPart15();
    });
}


// Parte 5-No hacer nada, lleva a la parte 14.
const showPart5 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text"><b><u>Decides quedarte en tu lugar</b></u>. Exploras el espacio en el que se encuentran con la mirada y notas que es una <b>habitación con paredes y piso de cemento</b>. Cuando te intentas levantar, te das cuenta que las piernas no te responden como deberían hacerlo. <b>¿Te han drogado?</b> Revisas tus bolsillos para ver si encuentras algo que pueda ayudarte a recordar, pero están vacíos.
        <br><br>
        -¡¿HOLA?! -gritas, pero nadie responde. Sientes tu garganta seca, ¿cuánto hace que no bebes nada?
        <br><br>
        Un rato más tarde en el que decides quedarte en silencio, escuchas que la <b>mujer de cabello rubio</b> empieza a moverse. El <b>afroamericano hace lo propio y comienza a levantarse</b>, pero, al igual que a ti, le cuesta horrores. <b>La única que sigue sin despertar es la chica con la bolsa en la cabeza</b>.
        <br><br>
        -¿Dónde estoy? -pregunta la rubia -¿Quiénes son ustedes?
        <br><br>
        -Mi nombre es ${player} y me acabo de despertar, hace unos minutos.
        <br><br>
        La mujer rubia se presenta como <b>Roma</b>, y el afroamericano dice llamarse <b>Héctor</b>.
        <br><br>
        - ¿Qué pasa con esta otra? -pregunta Héctor, observando a la chica de la bolsa.
        </p>
        <div class="options">
            <button id="next5" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next5");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart14();
    })
}

// Parte 6-Sacudirla suavemente, lleva a la parte 14.
const showPart6 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text"><b><u>La tomas de ambos hombros como puedes y comienzas a sacudirla un poco</b></u>, lo suficiente como para que despierte. Ella abre los ojos, te mira, las pupilas se le contraen como un diafragma que se acomoda a la pobre iluminación del espacio. Se intenta alejar de ti, pero el cuerpo le pesa y cae desplomada.
        <br><br>
        -¡Tranquila! No voy a lastimarte. Me llamo ${player} y acabo de despertarme justo ahí -señalas el lugar exacto donde te despertaste.
        <br><br>
        -¿Dónde estoy? -pregunta ella.
        <br><br>
        -No tengo idea -le respondes.
        <br><br>
        Le dejas espacio para que se recupere y ves cómo se voltea a ver a las otras dos personas que les acompañan. <b>El afroamericano abre los ojos y comienza a levantarse</b>, pero, al igual que a ti, le cuesta horrores. <b>La única que sigue sin despertar es la chica con la bolsa en la cabeza</b>.
        <br><br>
        Tanto tú como la rubia se presentan ante el afroamericano luego de aconsejarle que no se mueva tanto; ella se llama <b>Roma</b> y él, <b>Héctor</b>.
        <br><br>
        - ¿Qué pasa con esta otra? -pregunta Héctor, observando a la chica de la bolsa.
        </p>
        <div class="options">
            <button id="next" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart14();
    })
}

// Parte 7-Darle una bofetada, lleva a la parte 14.
const showPart7 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">Intentas despertarla, pero no hay caso. Sabes que no es la mejor manera, pero te decides a encontrar respuestas. <b><u>Le das una pequeño golpecito en una mejilla</b></u> para que recobre el conocimiento. Ella abre los ojos, asustada, intenta alejarse de ti, pero el cuerpo le pesa y cae desplomada.
        <br><br>
        -¡Tranquila! No voy a lastimarte. Me llamo ${player} y acabo de despertarme justo ahí -señalas el lugar exacto donde te despertaste.
        <br><br>
        -¿Dónde estoy? -pregunta ella.
        <br><br>
        -No tengo idea -le respondes.
        <br><br>
        Le dejas espacio para que se recupere y ves cómo se voltea a ver a las otras dos personas que les acompañan. <b>El afroamericano abre los ojos y comienza a levantarse</b>, pero, al igual que a ti, le cuesta horrores. <b>La única que sigue sin despertar es la chica con la bolsa en la cabeza</b>.
        <br><br>
        Tanto tú como la rubia se presentan ante el afroamericano luego de aconsejarle que no se mueva tanto; ella se llama <b>Roma</b> y él, <b>Héctor</b>.
        <br><br>
        - ¿Qué pasa con esta otra? -pregunta Héctor, observando a la chica de la bolsa.
        </p>
        <div class="options">
            <button id="next2" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next2");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart14();
    })
}

// Parte 8-"No sé", lleva a la parte 14.
const showPart8 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">-Mi nombre es ${player}. Acabo de despertarme hace unos minutos. <b>No sé dónde estamos ni qué hacemos aquí</b>. Parece una especie de galpón o bunker o... no sé. No tengo idea.
        <br><br>
        El afroamericano intenta levantarse pero le es imposible.
        <br><br>
        - Despacio, con cuidado -le ayudas a sentarse correctamente y haces lo mismo.
        <br><br>
        - Me llamo <b>Héctor</b> -te extiende la mano y le devuelves la tuya con un apretón.
        <br><br>
        De repente, <b>la mujer rubia se despierta</b>, sobresaltada. Ambos intentan calmarla. Se presenta y dice que se llama <b>Roma</b>.
        <br><br>
        - ¿Qué hay con esta otra? -pregunta Héctor, señalando a la mujer con la bolsa en la cabeza.
        </p>
        <div class="options">
            <button id="next3" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next3");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart14();
    })
}

// Parte 9-"Nos drogaron", lleva a la parte 14.
const showPart9 = () => {
    story.innerHTML = `
    <div class="boxText">
        <p class="text">Mi nombre es ${player}. <b>Al parecer nos drogaron y nos metieron en esta especie de bunker o habitación... no sé exactamente qué es</b>. Miras los muros de cemento que los encierran.
        <br><br>
        - Sinceramente, no sé por qué alguien nos haría esto; al menos <i>yo</i> no he hecho nada malo -observas detenidamente la <b>marca en su cuello</b>. Él sabe que lo estás haciendo.
        <br><br>
        - ¿Se te perdió algo? -pregunta, intimidante.
        <br><br>
        Antes de que puedas responder, te salva la campana. <b>La mujer rubia se despierta</b>, sobresaltada. Entre el hombre y tú intentan calmarla. Le explicas lo mismo que le acabas de explicar a él y se asusta aún más. Les preguntas cómo se llaman; él se llama <b>Héctor</b> y ella, <b>Roma</b>.
        <br><br>
        - ¿Qué hay con esta otra? -pregunta Héctor, señalando a la mujer con la bolsa en la cabeza.
        </p>
        <div class="options">
            <button id="next4" class="optionButton">Siguiente...</button>
        </div>
    </div>`

    let nextPage = document.querySelector("#next4");
    nextPage.addEventListener("click", () => {
        story.innerHTML = ``;
        showPart14();
    })
}
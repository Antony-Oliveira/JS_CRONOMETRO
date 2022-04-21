window.onload = () => {
    let tempoContagem = 0;
    let minutos = 00;
    let segundos = 00;
    let milis = 00;
    let interval;

    let elementMinutos = document.querySelector("#minutos");
    let elementSegundos = document.querySelector("#segundos");
    let elementMilis = document.querySelector("#milis");

    let btnIniciar = document.querySelector("#iniciar");
    let btnPausar = document.querySelector("#pausar");
    let btnReiniciar = document.querySelector("#reiniciar");
    let btnSalvar = document.querySelector("#salvar");

    btnIniciar.onclick = () => {
        clearInterval(interval);
        interval = setInterval(iniciarCronometro, 10);
    };

    btnPausar.onclick = () => {
        clearInterval(interval);
    };

    btnReiniciar.onclick = () => {
        clearInterval(interval);
        minutos = 00;
        segundos = 00;
        milis = 00;
        elementMinutos.innerText = `0${minutos}`;
        elementSegundos.innerText = `0${segundos}`;
        elementMilis.innerText = `0${milis}`;
    };

    function iniciarCronometro() {
        milis++;
        if (milis <= 9) {
            elementMilis.innerText = `0${milis}`;
        }
        if (milis > 9) {
            elementMilis.innerText = milis;
        }
        if (milis > 99) {
            segundos++;
            elementSegundos.innerText = `0${segundos}`;
            milis = 0;
            elementMilis.innerText = `0${milis}`;
        }
        if (segundos <= 9) {
            elementSegundos.innerText = `0${segundos}`;
        }
        if (segundos > 9) {
            elementSegundos.innerText = segundos;
        }
        if (segundos > 59) {
            minutos++;
            elementMinutos.innerText = `0${minutos}`;
            segundos = 0;
            milis = 0;
            elementMilis.innerText = `0${milis}`;

        }
    }
    btnSalvar.onclick = () => {
        tempoContagem++;
        let tempo = `${elementMinutos.textContent}:${elementSegundos.textContent}:${elementMilis.textContent}`;
        let div = document.querySelector("#salvos");
        div.innerHTML += `<p id="log">Tempo ${tempoContagem}: ${tempo}</p>`;
        console.log(tempo);
    }

}
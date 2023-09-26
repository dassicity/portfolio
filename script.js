const kick = document.querySelector("#key-kick");
const snare = document.querySelector("#key-snare");
const clap = document.querySelector("#key-clap");
const closed = document.querySelector("#key-closed");
const open = document.querySelector("#key-open");
const cymbal = document.querySelector("#key-cymbal");

const instruments = ['kick', 'snare', 'clap', 'open', 'closed', 'cymbal'];
let sounds = {};
instruments.forEach(instrument => {
    sounds[instrument] = new Audio('sounds/' + instrument + '.wav')
});


function mouseHandler(inputSound) {
    inputSound.classList.add('drum-letters-click');
    // inputSound.querySelector(".drum-machine__item-glyph").classList.remove('sound-played-glyph');
    setTimeout(function () {
        inputSound.classList.remove('drum-letters-click');
        // inputSound.querySelector(".drum-machine__item-glyph").classList.add('sound-played-glyph');
    }, 100);
}


kick.addEventListener("click", () => {
    sounds['kick'].play();
    mouseHandler(kick);
});

snare.addEventListener("click", () => {
    sounds['snare'].play();
    mouseHandler(snare);
});

clap.addEventListener("click", () => {
    sounds['clap'].play();
    mouseHandler(clap);
});

closed.addEventListener("click", () => {
    sounds['closed'].play();
    mouseHandler(closed);
});

open.addEventListener("click", () => {
    sounds['open'].play();
    mouseHandler(open);
});

cymbal.addEventListener("click", () => {
    sounds['cymbal'].play();
    mouseHandler(cymbal);
});

document.onkeydown = (event) => {
    if (event.repeat) {
        return;
    }

    function keyHandler(inputSound) {
        inputSound.classList.add('drum-letters-click');
        // inputSound.querySelector(".drum-machine__item-glyph").classList.remove('sound-played-glyph');
        setTimeout(function () {
            inputSound.classList.remove('drum-letters-click');
            // inputSound.querySelector(".drum-machine__item-glyph").classList.add('sound-played-glyph');
        }, 100);
    }

    if (event.ctrlKey == true) {
        event.preventDefault;
        return;
    }

    if (event.which == "81") {
        sounds['kick'].currentTime = 0;
        sounds['kick'].play();
        keyHandler(kick);
    }
    if (event.which == "87") {
        sounds['snare'].currentTime = 0;
        sounds['snare'].play();
        keyHandler(snare);
    }
    if (event.which == "69") {
        sounds['clap'].currentTime = 0;
        sounds['clap'].play();
        keyHandler(clap);
    }
    if (event.which == "82") {
        sounds['closed'].currentTime = 0;
        sounds['closed'].play();
        keyHandler(closed);
    }
    if (event.which == "84") {
        sounds['open'].currentTime = 0;
        sounds['open'].play();
        keyHandler(open);
    }
    if (event.which == "89") {
        sounds['cymbal'].currentTime = 0;
        sounds['cymbal'].play();
        keyHandler(cymbal);
    }

}

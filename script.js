let screen = document.querySelector('.screen');

function inputHere(val) {
    screen.value = screen.value + val;
}

function solve(){
    screen.value = eval(screen.value);
}

function reset(){
    screen.value = '';
}
let number = document.querySelector('.number');

let i = 0;

function start() {
    if (i <= 100) {
        i++;
        if (i == 101) {
            i = 0 
        }
    }
    number.innerHTML = i + ' %'
    setTimeout(start, 100);
}
start()




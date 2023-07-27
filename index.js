let grid = document.querySelectorAll('div > div');
let btnRandom = document.querySelector('.btn-js')
function colorRandom() {
    let result = '';
    let letter = '0123456789ABCDEF';
    let maxLetter = letter.length - 1;
    for (let i = 0; i < 6; ++i) {
        position = Math.floor(Math.random() * maxLetter);
        result = result + letter.substring(position, position + 1);
    }
    const colorStyle = '#' + result;
    return colorStyle;
}

function saveColor() {
    for (let color of grid) {

        color.addEventListener('click', function (event) {
            if (event.target.nodeName !== 'BUTTON') {
                return
            }
            color.classList.toggle('lock')

        })
    }
}

function renderColor() {
    for (let color of grid) {
        if (color.classList.contains('lock')) {
            continue

        }
        let colorText = colorRandom();
        color.style.background = `${colorText}`
        color.innerHTML = `<div class="text-inner">${colorText}</div><button class="onlock"></button>`

    }
}

btnRandom.addEventListener('click', () => {
    renderColor()
})


saveColor()
renderColor()




































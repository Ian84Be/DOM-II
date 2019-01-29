// STROBELIGHT BUTTONS
let destinationButton = document.querySelectorAll('.destination .btn');
destinationButton.forEach(el => {
    el.addEventListener('mousedown', ev => {
        document.querySelector('body').style = 'animation: pulse 500ms infinite';
    });
    el.addEventListener('mouseup', ev => {
        document.querySelector('body').style = 'animaion: null';
    })
});

// RAINBOW SCROLLER
window.addEventListener('scroll', ev => {
    document.querySelector('.main-navigation').setAttribute('style', 'border-bottom: 2px dashed' + getColor());
});

// HEX CODE GENERATOR (student contribution from web16 video)
function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0;i<6;i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

// P TAG TEXT HI-LITE
let pTags = document.querySelectorAll('p');
pTags.forEach(el => {
    el.addEventListener('mouseover', ev => {
        el.style.color = 'red';
    })
    el.addEventListener('mouseout', ev => {
        el.style.color = 'black';
    })
});

let typerTag = document.querySelector('#typerband');
let typerText = document.querySelector('#typerband p');

// PRESS ANY KEY, PRESS ALL OF THEM
document.querySelector('body').addEventListener('keydown', ev => {
    console.log(ev.code);
    typerTag.setAttribute('style', 'display:flex;');
    typerText.textContent += `${ev.key}`;
});

document.querySelector('body').addEventListener('keyup', ev => {
    console.log(ev.code);
    typerTag.setAttribute('style', 'display:none;');
});








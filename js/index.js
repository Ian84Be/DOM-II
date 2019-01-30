// STROBELIGHT BUTTONS
let destinationButton = document.querySelectorAll('.destination .btn');
destinationButton.forEach(el => {
    el.addEventListener('mousedown', ev => {
        document.querySelector('body').style = 'animation: pulse 500ms infinite';
    });
    el.addEventListener('mouseup', ev => {
        document.querySelector('body').style = 'animation: null';
    })
    el.addEventListener('dblclick', ev => {
        console.log('dblBUBBLE');
        ev.stopPropagation();
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
    typerTag.setAttribute('style', 'display:none;');
});

// taken from MDN
window.addEventListener('blur', pause);
window.addEventListener('focus', play);

function pause() {
    document.body.classList.add('paused');
    console.log('FOCUS LOST!');
}
  
function play() {
    document.body.classList.remove('paused');
    console.log('This document has focus.');
}
const all = document.querySelectorAll('*');

// SEIZURE WARNING: dbl click anywhere if u dare
window.addEventListener('dblclick', ev => {
    
    all.forEach(el => {
        el.style = 'animation: pulse 50ms infinite';
    });
});

// SEIZURE ANTIDOTE: CLICK IMG
document.querySelectorAll('img').forEach(el => {
    el.addEventListener('click', ev => {
        all.forEach(el => {
            el.style.background = '';
            el.style.animation = '';
        });
    });
});

document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', ev => ev.preventDefault());
})










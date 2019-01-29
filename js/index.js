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

window.addEventListener('scroll', ev => {
    document.querySelector('h1.logo-heading').style.color = getColor();
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
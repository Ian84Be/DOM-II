// STROBELIGHT BUTTONS
let destinationButton = document.querySelectorAll('.destination .btn');
console.log(destinationButton);
destinationButton.forEach(el => {
    el.addEventListener('mousedown', ev => {
        document.querySelector('body').style = 'animation: pulse 500ms infinite';
    });
    el.addEventListener('mouseup', ev => {
        document.querySelector('body').style = 'animaion: null';
    })
});

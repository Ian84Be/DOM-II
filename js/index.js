// Your code goes here
let destinationButton = document.querySelectorAll('.destination .btn');
console.log(destinationButton);
destinationButton.forEach(el => {
    el.addEventListener('click', ev => {
        console.log(`event type: ${ev} target is ${ev.target}`);
    })
});

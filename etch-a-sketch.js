// Select the elements on the page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
const width = canvas.width;
const height = canvas.height;

// Create random X & Y starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({key}){
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(hue);
    console.log(key);
    //start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values depending on what the user did
    switch(key){
        case 'ArrowUp' : y = y - MOVE_AMOUNT
        break;
        case 'ArrowRight' : x = x + MOVE_AMOUNT
        break;
        case 'ArrowDown' : y = y + MOVE_AMOUNT
        break;
        case 'ArrowLeft' : x = x - MOVE_AMOUNT
        break;
        default : break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

// Write a handler for the keys
function handleKey(event){
    if(event.key.includes('Arrow')){
        event.preventDefault();
        draw({ key: event.key });
    }
}


// Clear/shake function


// Listen for arrow keys
window.addEventListener('keydown', handleKey);
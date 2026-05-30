import { setupControls } from "./funcs.js";
import { getPlayerXPos } from "./funcs.js";
const keys = setupControls();
const playerElement = document.getElementById("player");
const screenWidth = window.innerWidth;
const playerWidth = 100;

const screenHeight = window.innerHeight;
const playerHeight = 100;
let speed = 10
let player = {
    x: 1000,
    y: 0
}
function update() {
    if (keys.right) {
        player.x += speed;
    }

    if (keys.left) {
        player.x -= speed;
    }
        if (keys.up) {
        player.y -= speed;
    }
        if (keys.down) {
        player.y += speed;
    }


    if (player.x > screenWidth - playerWidth) {
        player.x = screenWidth - playerWidth;
    }
    if (player.x < 0) {
    player.x = 0;
    }
    if (player.y > screenHeight - playerHeight) {
        player.y = screenHeight - playerHeight
        ;
    }
    if (player.y < 0) {
    player.y = 0;
    }

    console.log(player.x)
    console.log(screenWidth)
}
function draw() {
    playerElement.style.left = player.x + "px"
    playerElement.style.top = player.y + "px"
}
function gameLoop() {
    update();
    draw();



    requestAnimationFrame(gameLoop);
}
gameLoop();
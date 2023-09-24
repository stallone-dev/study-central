"use strict";

const canvas = document.querySelector("canvas");
const context_game = canvas.getContext("2d");

const MIN_MAP_AREA = 50;

const snake = [
    {x: 0, y: 0},
    {x: 50, y: 0},
    {x: 100, y: 0},
];

let direction, loop_id;

const move_snake = () => {
    if(!direction){return};
    const head =  snake[snake.length-1];
    snake.shift();

    if(direction === "right"){
        snake.push({x: head.x+MIN_MAP_AREA, y: head.y})
    };
    if(direction === "left"){
        snake.push({x: head.x-MIN_MAP_AREA, y: head.y})
    };
    if(direction === "up"){
        snake.push({x: head.x, y: head.y-MIN_MAP_AREA})
    };
    if(direction === "down"){
        snake.push({x: head.x, y: head.y+MIN_MAP_AREA})
    };
};


const draw_snake = () => {
    context_game.fillStyle = "#ddd9";

    snake.forEach((position, index) => {
        if(index === snake.length-1){context_game.fillStyle = "white"};

        context_game.fillRect(position.x, position.y, MIN_MAP_AREA, MIN_MAP_AREA);
    });
}


const main_game = () => {
    clearInterval(loop_id);
    context_game.clearRect(0,0,1000,1000);

    move_snake();
    draw_snake();

    loop_id = setTimeout(() => {
        main_game();
    }, 300);
};

main_game();


document.addEventListener("keydown", ({key}) => {
    console.log(key)
    switch (key){
        case "ArrowUp"  : direction !== "down" ? direction = "up" : null; break;
        case "ArrowDown" : direction !== "up" ? direction = "down" : null; break;
        case "ArrowLeft" : direction !== "right" ? direction = "left" : null; 
        break;
        case "ArrowRight": direction !== "left" ? direction = "right" : null; 
        break;
    };
});
const canvas = document.getElementById("pong-canvas");
const context = canvas.getContext("2d");

document.addEventListener("keydown" , eventsProcess );

var distanceFromEdge = 20;

var posOfPlayersBorder = {x: canvas.getAttribute('width') - distanceFromEdge - 20  , y: 0, angle: 0};
var playersBorder = newBorder(posOfPlayersBorder, canvas.getAttribute('width'));

var posOfEnemysBorder = {x: distanceFromEdge, y: 0, angle: 0};
var EnemysBorder = newBorder(posOfEnemysBorder, canvas.getAttribute('width'));

const fps = 60;
setInterval(renderGame, 1000/fps);

function eventsProcess(event) {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    switch(event.code){
        case 'ArrowDown' : playersBorder.moveRigth(); break;
        case 'ArrowUp' : playersBorder.moveLeft(); break;
    }
}

function renderGame() {
    clearCanvas();

    playersBorder.draw();
    EnemysBorder.draw();
}

function clearCanvas() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
}

function newBorder(position, span) {

    var border = {};
    
    border.color = "white";
    border.width = 20;
    border.lenght = 120;
    
    border.position = position;
    border.span = span;
    border.positionAtSpan = border.span / 2;
    
    border.draw = function(){
        context.fillStyle = this.color;
        context.fillRect(
            this.position.x,
            this.position.y + this.positionAtSpan - (this.lenght/2),
            this.width,
            this.lenght
        );
    }

    var increment = 10;

    border.moveRigth = function() {
        //var increment = 10;
        if (this.positionAtSpan+(this.lenght/2)+increment <= this.span) {
            this.positionAtSpan += increment;
        }else{
            this.positionAtSpan = this.span-(this.lenght/2)
        }
    }
    border.moveLeft = function() {
        //var increment = 10;
        if (this.positionAtSpan-(this.lenght/2)-increment >= 0) {
            this.positionAtSpan -= increment;
        }else{
            this.positionAtSpan = 0+(this.lenght/2);
        }
    }

    return border;
}

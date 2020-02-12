const canvas = document.getElementById("pong-canvas");
const context = canvas.getContext("2d");

//var MAX_SCREEN = 600; // canvas.getAttribute('width')

var pos1 = {x: 10, y: 0, angle: 0}; // 'y' нужен только если используем и angle

var border1 = newBorder(pos1, canvas.getAttribute('width'));

//while (true)
{
    border1.draw();
    border1.moveRigth();
    border1.moveRigth();
    border1.draw();
}

function newBorder(position, span) {

    var border = {};
    
    border.color = "black";
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

    border.moveRigth = function(){
        var increment = 2;
        
        if (this.positionAtSpan+increment <= this.span) {
            this.positionAtSpan += increment;
        }
    }

    return border;
}

function setup() {
    WIDTH = 500;
    HEIGHT = 500;

    createCanvas(WIDTH, HEIGHT);

    SQUARES = 5000;
    SIZE_FACTOR = 3;
    SPACE_FACTOR = 2.4;
    ROTATE_FACTOR = 8;

    frame=0;
}

function draw() {
    background(0);

    for (var i=0;i<SQUARES;i++){
        push();
        translate(width/2, height/2);
        rotate((PI/ROTATE_FACTOR)*i+frame/100);
        noFill();
        size = (i**SPACE_FACTOR)*SIZE_FACTOR*(100/(frame));
        if (size>0){
            stroke(255);
            rect(
                -size/2,
                -size/2,
                size,
                size
            );
        }
        pop();
    }
    frame++;
}
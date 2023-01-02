function setup() {
    WIDTH = 500;
    HEIGHT = 500;

    createCanvas(WIDTH, HEIGHT);

    SQUARES = 5000;
    SIZE_FACTOR = 3;
    SPACE_FACTOR = 2.4;
    ROTATE_FACTOR = 8;
    SPEED_FACTOR=1;

    frame=0;
    decrease = false;
}

function draw() {
    background(0);

    for (var i=0;i<SQUARES;i++){
        push();
        translate(width/2, height/2);
        rotate(-(PI/ROTATE_FACTOR)*i+(decrease==true?-1:1)*frame*SPEED_FACTOR/100);
        noFill();
        size = (i**SPACE_FACTOR)*SIZE_FACTOR*(100/(frame*SPEED_FACTOR));
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
    if (decrease){
        frame++;
    }
    else {
        frame--; 
    }
    if (frame*SPEED_FACTOR>1000){
        decrease = true;
    }
    if (frame*SPEED_FACTOR<1){
        decrease = true;
    }
    console.log(frame);
}
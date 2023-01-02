let coor;

function setup() {
    WIDTH = 1200;
    HEIGHT = 700;

    createCanvas(WIDTH, HEIGHT);

    background(200,200,200);

    strokeWeight(1);
    noFill();
    beginShape();

    for (var x=-WIDTH/2;x<WIDTH;x++){
        y = (x/10)**3;
        curveVertex(x + WIDTH/2, y + HEIGHT/2);
    }

    endShape();
}

function draw() {
    //background(200,200,200);

    // rect(20,20,20,20)
    // strokeWeight(1);
    // noFill();
    // beginShape();
    // a=0;
    // for (var i=0;i<10000;i++){
    //     a++;
    //     r=a*0.1
    //     cos_ang = Math.cos(a*Math.PI/360);
    //     sin_ang = Math.sin(a*Math.PI/360);
    //     x = r*cos_ang;
    //     y = r*sin_ang;
    //     curveVertex(WIDTH/2+x, HEIGHT/2+y);
    // }
    // endShape();
}
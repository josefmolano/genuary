function setup() {
    WIDTH = 400;
    HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    background(0);
    R_BASE = 5;
    r_0 = R_BASE;
    y_0 = HEIGHT;
    x = [[
        WIDTH/2, // x
        HEIGHT, // y
        0, // x rate
        0.2+Math.random()*2, // y rate
        HEIGHT-10-Math.random()*50, // y target
        true // draw?
    ]];
}

function draw() {
    noStroke();
    fill(255);
    for(var i=0;i<x.length;i++){
        if(x[i][1]>x[i][4] & x[i][5]){
            x[i][1]-=x[i][3]; 
            x[i][0]+=x[i][2]; 
        }
        else if (x[i][1]<=x[i][4] & x[i][5]) {
            x[i][5]=false;
            if(x[i][2]>0){
                prob_left = 0.7;
                prob_right = 0.9;
            } else {
                prob_left = 0.9;
                prob_right = 0.7;
            }
            if (Math.random()<prob_left){
                x.push([
                    x[i][0], // x
                    x[i][1], // y
                    -Math.random()*0.7, // x rate
                    0.2+Math.random()*1.5, // y rate
                    x[i][1]-10-Math.random()*50, // y target
                    true // draw?
                ])
            }
            if (Math.random()<prob_right){
                x.push([
                    x[i][0], // x
                    x[i][1], // y
                    Math.random()*0.7, // x rate
                    0.2+Math.random()*1.5, // y rate
                    x[i][1]-10-Math.random()*50, // y target
                    true // draw?
                ])
            }
        }
        if((x[i][5]) & (r_0>0)){
            circle(x[i][0],x[i][1],max(0,r_0));
        }
    }
    r_0-=0.01;
}
function setup() {
    WIDTH = 500;
    HEIGHT = 500;
    NUM_SQUARES = 100;

    createCanvas(WIDTH, HEIGHT);

    squares = []
    for(var i=0;i<NUM_SQUARES;i++){
        squares.push(
            (1/NUM_SQUARES)*(1.35)**i*WIDTH
            //(1/NUM_SQUARES)*i*WIDTH
        )
    }
    frame=0;
}

function draw() {
    background(0);

    for (var i=0;i<NUM_SQUARES;i++){
        noFill();
        stroke(255);
        if (squares[i]<=0){
            if(i!=0){
                squares[i]=squares[i-1]*1.5
            }
            else {
                squares[i]=squares[NUM_SQUARES-1]*1.5
            }
        } else {
            rect(
                (WIDTH-squares[i])/2,
                (WIDTH-squares[i])/2,
                squares[i],
                squares[i]
            );
        }
        squares[i]-=(0.1+4*squares[i]/WIDTH);
    }
    frame++;
}
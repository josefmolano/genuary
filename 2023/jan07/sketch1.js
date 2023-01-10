function preload() {
    FRAMES = loadJSON('http://localhost:8000/frames.json');
    LOGO = loadJSON('http://localhost:8000/logo.json');
}

function setup() {
    WIDTH = 700;
    HEIGHT = 700;
    GAP = 300;
    SQUARES = 15;
    SQUARE_HEIGHT = (WIDTH-2*GAP)/SQUARES;
    ROWS = HEIGHT/SQUARE_HEIGHT;

    grid = [];

    for (var i=0;i<ROWS;i++){
        row = [];
        for (var j=0;j<SQUARES;j++){
            row.push([]);
        }
        grid.push(row);
    }

    createCanvas(WIDTH, HEIGHT);

    frame = 0;

    frameRate(10);
}

function draw() {
    background(255);
    for (var i=0;i<ROWS;i++){
        for (var j=0;j<SQUARES;j++){
            square_colors = FRAMES[(Math.floor(i/2)+Math.floor(frame))%449];
            selected_color = square_colors[Math.floor(Math.random() * 100)];
            rgb = selected_color.split(',');
            if (1==1){
                fill(
                    color(
                        rgb[0],
                        rgb[1],
                        rgb[2]
                    )
                );
            }
            else {
                fill(255);
            }
            noStroke();
            rect(
                GAP+j*SQUARE_HEIGHT,
                (i-1)*SQUARE_HEIGHT,
                SQUARE_HEIGHT,
                SQUARE_HEIGHT
            );
        }
    }
    frame++;
}
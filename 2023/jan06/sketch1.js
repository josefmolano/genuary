function setup() {
    WIDTH = 700;
    HEIGHT = 700;
    GAP = 200;
    SQUARES = 12;
    SQUARE_HEIGHT = (WIDTH-2*GAP)/SQUARES;
    ROWS = HEIGHT/SQUARE_HEIGHT;
    EPSILON = (PI/50);
    EPSILON_POS = 2;
    DELTA = (PI/30);
    ROTATION = (PI/2);
    DELTA_POS = 1;
    MOVE_X_FACTOR = 1;
    MOVE_Y_FACTOR = 1;
    REFRESH_RATE = 200;

    grid = [];

    for (var i=0;i<ROWS;i++){
        row = [];
        for (var j=0;j<SQUARES;j++){
            disruption_window = ROTATION*(i/ROWS);
            disruption = disruption_window*Math.random();

            target_disruption_window = ROTATION*(i/ROWS);
            target_disruption = target_disruption_window*Math.random();
            
            pos_x_disruption_window = SQUARE_HEIGHT*(i/ROWS);
            pos_x_disruption = pos_x_disruption_window*Math.random();

            pos_x_target_disruption_window = SQUARE_HEIGHT*MOVE_X_FACTOR*(i/ROWS);
            pos_x_target_disruption = pos_x_target_disruption_window*Math.random();
            
            pos_y_disruption_window = SQUARE_HEIGHT*(i/ROWS);
            pos_y_disruption = pos_y_disruption_window*Math.random();

            pos_y_target_disruption_window = SQUARE_HEIGHT*MOVE_Y_FACTOR*(i/ROWS);
            pos_y_target_disruption = pos_y_target_disruption_window*Math.random();

            row.push([
                -disruption_window/2+disruption,
                -target_disruption_window/2+target_disruption,
                -pos_x_disruption_window/2+pos_x_disruption,
                -pos_x_target_disruption_window/2+pos_x_target_disruption,
                -pos_y_disruption_window/2+pos_y_disruption,
                -pos_y_target_disruption_window/2+pos_y_target_disruption
            ]);
        }
        grid.push(row);
    }

    createCanvas(WIDTH, HEIGHT);

    frame = 0;
}

function draw() {
    background(255);
    for (var i=0;i<ROWS;i++){
        for (var j=0;j<SQUARES;j++){
            noFill();
            stroke(0);

            if(Math.abs(grid[i][j][0]-grid[i][j][1])>EPSILON){
                if(grid[i][j][0]>grid[i][j][1]){
                    //grid[i][j][0]=grid[i][j][0]-DELTA*(i/ROWS);
                    grid[i][j][0]=grid[i][j][0]-DELTA*(i/ROWS);
                }
                else {
                    grid[i][j][0]=grid[i][j][0]+DELTA*(i/ROWS);
                }
            }
            else {
                target_disruption_window = ROTATION*(i/ROWS);
                target_disruption = target_disruption_window*Math.random();
                grid[i][j][1] = -target_disruption_window/2+target_disruption;
            }

            if(Math.abs(grid[i][j][2]-grid[i][j][3])>EPSILON_POS){
                if(grid[i][j][2]>grid[i][j][3]){
                    grid[i][j][2]=grid[i][j][2]-DELTA_POS*(i/ROWS);
                }
                else {
                    grid[i][j][2]=grid[i][j][2]+DELTA_POS*(i/ROWS);
                }
            }
            else {
                pos_x_target_disruption_window = SQUARE_HEIGHT*MOVE_X_FACTOR*(i/ROWS);
                pos_x_target_disruption = pos_x_target_disruption_window*Math.random();
                grid[i][j][3] = -pos_x_target_disruption_window/2+pos_x_target_disruption;
            }

            if(Math.abs(grid[i][j][4]-grid[i][j][5])>EPSILON_POS){
                if(grid[i][j][4]>grid[i][j][5]){
                    grid[i][j][4]=grid[i][j][4]-DELTA_POS*(i/ROWS);
                }
                else {
                    grid[i][j][4]=grid[i][j][4]+DELTA_POS*(i/ROWS);
                }
            }
            else {
                pos_y_target_disruption_window = SQUARE_HEIGHT*MOVE_Y_FACTOR*(i/ROWS);
                pos_y_target_disruption = pos_y_target_disruption_window*Math.random();
                grid[i][j][5] = -pos_y_target_disruption_window/2+pos_y_target_disruption;
            }
            push();
            translate(
                GAP+j*SQUARE_HEIGHT+SQUARE_HEIGHT/2+grid[i][j][2],
                (i-1)*SQUARE_HEIGHT+SQUARE_HEIGHT/2+grid[i][j][4]
            );
            rotate(grid[i][j][0]);
            rect(
                -SQUARE_HEIGHT/2,
                -SQUARE_HEIGHT/2,
                SQUARE_HEIGHT,
                SQUARE_HEIGHT
            );
            pop();
            /* text(
                grid[i][j][2],
                GAP+j*SQUARE_HEIGHT+SQUARE_HEIGHT/2+grid[i][j][2],
                (i-1)*SQUARE_HEIGHT+SQUARE_HEIGHT/2+grid[i][j][2]
            ) */
        }
    }
    frame++;
}
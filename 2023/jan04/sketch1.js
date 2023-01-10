function setup() {
    WIDTH = 500;
    HEIGHT = 500;
    SPEED = 1/5;
    COLORS_N = 3;

    COLORS = [
        // color('#f7fff7'),
        color('#1a535c'),
        color('#ffe66d'),
        color('#4ecdc4')
    ]
    createCanvas(WIDTH, HEIGHT);

    GRID_N = 40;
    LINES_N = COLORS_N*3;

    SPACE = WIDTH/GRID_N;

    grid = [];

    for(var k=0;k<COLORS_N;k++){
        grid_new = [];

        row_0 = [];
        row_z = [];
        for (var j=0;j<GRID_N;j++){
            row_0[j]=1;
            row_z[j]=1;
        }
        grid_new[0] = row_0;

        for (var i=1;i<GRID_N-1;i++){
            row = [];
            row[0] = 1;
            for (var j=1;j<GRID_N-1;j++){
                row[j]=0;
            }
            row[GRID_N-1]=1;
            grid_new[i] = row;
        }

        grid_new[GRID_N-1] = row_z;
        grid.push(grid_new);
    }

    console.log(grid);

    seed = [];

    for(var i=0;i<LINES_N;i++){
        rx = Math.floor(Math.random() * GRID_N);
        ry = Math.floor(Math.random() * GRID_N);
        while (grid[i%1][ry][rx]==1){
            rx = Math.floor(Math.random() * GRID_N);
            ry = Math.floor(Math.random() * GRID_N);
        }
        grid[i%1][ry][rx]=1;
        seed.push([ry,rx]);
    }
    console.log(seed);

    target = [];

    for(var i=0;i<LINES_N;i++){
        tries = 0;
        direction = Math.floor(Math.random() * 4);
        if (direction==0){
            next_coor = [seed[i][0]-1,seed[i][1]]
        }
        else if (direction==1){
            next_coor = [seed[i][0]+1,seed[i][1]]
        }
        else if (direction==2){
            next_coor = [seed[i][0],seed[i][1]-1]
        }
        else if (direction==3){
            next_coor = [seed[i][0],seed[i][1]+1]
        }
        else if (direction==4){
            next_coor = [seed[i][0]-1,seed[i][1]-1]
        }
        else if (direction==5){
            next_coor = [seed[i][0]+1,seed[i][1]+1]
        }
        else if (direction==6){
            next_coor = [seed[i][0]+1,seed[i][1]-1]
        }
        else{
            next_coor = [seed[i][0]-1,seed[i][1]+1]
        }
        
        while (
            grid[i%1][next_coor[0]][next_coor[1]]==1
        ){
            direction = Math.floor(Math.random() * 4);
            if (direction==0){
                next_coor = [seed[i][0]-1,seed[i][1]]
            }
            else if (direction==1){
                next_coor = [seed[i][0]+1,seed[i][1]]
            }
            else if (direction==2){
                next_coor = [seed[i][0],seed[i][1]-1]
            }
            else if (direction==3){
                next_coor = [seed[i][0],seed[i][1]+1]
            }
            else if (direction==4){
                next_coor = [seed[i][0]-1,seed[i][1]-1]
            }
            else if (direction==5){
                next_coor = [seed[i][0]+1,seed[i][1]+1]
            }
            else if (direction==6){
                next_coor = [seed[i][0]+1,seed[i][1]-1]
            }
            else{
                next_coor = [seed[i][0]-1,seed[i][1]+1]
            }

            tries++;
            if (tries>=10){
                tries=0;
                rx = Math.floor(Math.random() * GRID_N);
                ry = Math.floor(Math.random() * GRID_N);
                while (grid[i%1][ry][rx]==1){
                    rx = Math.floor(Math.random() * GRID_N);
                    ry = Math.floor(Math.random() * GRID_N);
                }
                grid[i%1][ry][rx] = 1;
                seed[i] = [ry,rx];
                direction = Math.floor(Math.random() * 4);
                if (direction==0){
                    next_coor = [seed[i][0]-1,seed[i][1]]
                }
                else if (direction==1){
                    next_coor = [seed[i][0]+1,seed[i][1]]
                }
                else if (direction==2){
                    next_coor = [seed[i][0],seed[i][1]-1]
                }
                else if (direction==3){
                    next_coor = [seed[i][0],seed[i][1]+1]
                }
                else if (direction==4){
                    next_coor = [seed[i][0]-1,seed[i][1]-1]
                }
                else if (direction==5){
                    next_coor = [seed[i][0]+1,seed[i][1]+1]
                }
                else if (direction==6){
                    next_coor = [seed[i][0]+1,seed[i][1]-1]
                }
                else{
                    next_coor = [seed[i][0]-1,seed[i][1]+1]
                }
            }
        }
        target[i]=next_coor;
        grid[i%1][target[i][0]][target[i][1]]=1;
    }
    console.log(target);
    // background(color('#1a535c'));
    background(color('#f7fff7'));
}

function draw() {
    is_full = true;
    for (var i=0;i<GRID_N;i++){
        for (var j=0;j<GRID_N;j++){
            if (grid[i%1][i][j]==0){
                is_full=false;
            }
        }
    }
    if (!is_full){
        for(var i=0;i<LINES_N;i++){
            noStroke();
            fill(COLORS[i%COLORS_N]);
            circle(seed[i][1]*SPACE,seed[i][0]*SPACE,9);
            //text(i, seed[i][1]*SPACE,seed[i][0]*SPACE); 
        }
        for(var i=0;i<LINES_N;i++){
            if(
                Math.abs(seed[i][0]-target[i][0])<0.1 & //equals
                Math.abs(seed[i][1]-target[i][1])>0.1 //diff
            ){
                if(seed[i][1]<target[i][1]){
                    seed[i][1]=seed[i][1]+(SPEED);
                }
                else if(seed[i][1]>target[i][1]){
                    seed[i][1]=seed[i][1]-(SPEED);
                }
            }
            else if(
                Math.abs(seed[i][0]-target[i][0])>0.1 & //diff
                Math.abs(seed[i][1]-target[i][1])<0.1 //equals
            ){
                if(seed[i][0]<target[i][0]){
                    seed[i][0]=seed[i][0]+(SPEED);
                }
                else if(seed[i][0]>target[i][0]){
                    seed[i][0]=seed[i][0]-(SPEED);
                }
            }
            else if(
                Math.abs(seed[i][0]-target[i][0])>0.1 & //diff
                Math.abs(seed[i][1]-target[i][1])>0.1 //diff
            ){
                if(seed[i][0]<target[i][0]){
                    seed[i][0]=seed[i][0]+(SPEED);
                }
                else if(seed[i][0]>target[i][0]){
                    seed[i][0]=seed[i][0]-(SPEED);
                }

                if(seed[i][1]<target[i][1]){
                    seed[i][1]=seed[i][1]+(SPEED);
                }
                else if(seed[i][1]>target[i][1]){
                    seed[i][1]=seed[i][1]-(SPEED);
                }
            }
            else {
                seed[i]=target[i];
                tries = 0;
                direction = Math.floor(Math.random() * 4);
                if (direction==0){
                    next_coor = [seed[i][0]-1,seed[i][1]]
                }
                else if (direction==1){
                    next_coor = [seed[i][0]+1,seed[i][1]]
                }
                else if (direction==2){
                    next_coor = [seed[i][0],seed[i][1]-1]
                }
                else if (direction==3){
                    next_coor = [seed[i][0],seed[i][1]+1]
                }
                else if (direction==4){
                    next_coor = [seed[i][0]-1,seed[i][1]-1]
                }
                else if (direction==5){
                    next_coor = [seed[i][0]+1,seed[i][1]+1]
                }
                else if (direction==6){
                    next_coor = [seed[i][0]+1,seed[i][1]-1]
                }
                else{
                    next_coor = [seed[i][0]-1,seed[i][1]+1]
                }
                
                while (
                    grid[i%1][next_coor[0]][next_coor[1]]==1
                ){
                    direction = Math.floor(Math.random() * 4);
                    if (direction==0){
                        next_coor = [seed[i][0]-1,seed[i][1]]
                    }
                    else if (direction==1){
                        next_coor = [seed[i][0]+1,seed[i][1]]
                    }
                    else if (direction==2){
                        next_coor = [seed[i][0],seed[i][1]-1]
                    }
                    else if (direction==3){
                        next_coor = [seed[i][0],seed[i][1]+1]
                    }
                    else if (direction==4){
                        next_coor = [seed[i][0]-1,seed[i][1]-1]
                    }
                    else if (direction==5){
                        next_coor = [seed[i][0]+1,seed[i][1]+1]
                    }
                    else if (direction==6){
                        next_coor = [seed[i][0]+1,seed[i][1]-1]
                    }
                    else{
                        next_coor = [seed[i][0]-1,seed[i][1]+1]
                    }

                    tries++;
                    if (tries>=10){
                        tries=0;
                        rx = Math.floor(Math.random() * GRID_N);
                        ry = Math.floor(Math.random() * GRID_N);
                        while (grid[i%1][ry][rx]==1){
                            rx = Math.floor(Math.random() * GRID_N);
                            ry = Math.floor(Math.random() * GRID_N);
                        }
                        grid[i%1][ry][rx] = 1;
                        seed[i] = [ry,rx];
                        direction = Math.floor(Math.random() * 4);
                        if (direction==0){
                            next_coor = [seed[i][0]-1,seed[i][1]]
                        }
                        else if (direction==1){
                            next_coor = [seed[i][0]+1,seed[i][1]]
                        }
                        else if (direction==2){
                            next_coor = [seed[i][0],seed[i][1]-1]
                        }
                        else if (direction==3){
                            next_coor = [seed[i][0],seed[i][1]+1]
                        }
                        else if (direction==4){
                            next_coor = [seed[i][0]-1,seed[i][1]-1]
                        }
                        else if (direction==5){
                            next_coor = [seed[i][0]+1,seed[i][1]+1]
                        }
                        else if (direction==6){
                            next_coor = [seed[i][0]+1,seed[i][1]-1]
                        }
                        else{
                            next_coor = [seed[i][0]-1,seed[i][1]+1]
                        }
                    }
                }
                target[i]=next_coor;
                grid[i%1][target[i][0]][target[i][1]]=1;
            }
        }
    }
}
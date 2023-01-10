function setup() {
    WIDTH = 500;
    HEIGHT = 500;

    N_CIRCLE = 10;
    MIN_C = 100;
    MAX_C = 300;
    MIN_V = 5;
    MAX_V = 20;
    BACKGROUND_POINTS = 10000;
    CIRCLE_BG_SIZE = 1;
    COLORS = [];

    // for (var i=0;i<(N_CIRCLE+1);i++){
    //     COLORS.push(
    //         color(
    //             Math.floor(Math.random()*255),
    //             Math.floor(Math.random()*255),
    //             Math.floor(Math.random()*255)
    //         )
    //     )
    // }
    // circles = [];

    // for (var i=0;i<3;i++){
    //     COLORS.push(
    //         color(
    //             Math.floor(Math.random()*255),
    //             Math.floor(Math.random()*255),
    //             Math.floor(Math.random()*255)
    //         )
    //     )
    // }
    // circles = [];

    COLORS = [
        color('#FF577F'),
        color('#FF884B'),
        color('#FFD384'),
        color('#FFF9B0')
    ];

    circles = [];

    for(var i=0;i<N_CIRCLE;i++){
        c_x = WIDTH*Math.random();
        c_r = MIN_C + (MAX_C-MIN_C)*Math.random();
        c_v_x = MIN_V + (MAX_V-MIN_V)*Math.random();
        c_v_y = MIN_V + (MAX_V-MIN_V)*Math.random();
        circles.push(
            // [c_x, HEIGHT+MAX_C, c_r, c_v]
            [c_x, HEIGHT*Math.random(), c_r, c_v_x, c_v_y]
        )
    }

    background_c = [];

    for(var i=0;i<BACKGROUND_POINTS;i++){
        background_c.push(
            [
                WIDTH*Math.random(),
                HEIGHT*Math.random()
            ]
        )
    }

    createCanvas(WIDTH, HEIGHT);

    //

    background(255);

    for(var i=0;i<BACKGROUND_POINTS;i++){
        intersections = 0;
        min_d = WIDTH**2+HEIGHT**2;
        for(var j=0;j<N_CIRCLE;j++){
            d = ((background_c[i][0] - circles[j][0])**2 + (background_c[i][1] - circles[j][1])**2)**(0.5)
            if (d<circles[j][2]/2){
                intersections++;
            }
            if ((d-circles[j][2]/2)<min_d){
                min_d = (d-circles[j][2]/2);
            }
        }

        //fill(COLORS[intersections]);
        if (intersections>0){
            fill(COLORS[intersections%(COLORS.length)]);
            noStroke();
            circle(
                background_c[i][0],
                background_c[i][1],
                CIRCLE_BG_SIZE
            )
        } else {
            fill(
                color(
                    255,
                    Math.min(87+2*(255-87)*min_d/HEIGHT,255),
                    Math.min(127+2*(255-127)*min_d/HEIGHT,255)
                )
            );
            noStroke();
            circle(
                background_c[i][0],
                background_c[i][1],
                CIRCLE_BG_SIZE
            )
        }
    }

    for(var i=0;i<N_CIRCLE;i++){
        noFill();
        //stroke(0);
        noStroke();
        circle(
            circles[i][0],
            circles[i][1],
            circles[i][2]
        )
    }


    
}

function draw() {
    
}
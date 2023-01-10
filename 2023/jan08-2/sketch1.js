function setup() {
    WIDTH = 400;
    HEIGHT = 700;

    N_CIRCLE = 1;
    MIN_C = 100;
    MAX_C = 150;
    BACKGROUND_POINTS = 20000;
    CIRCLE_BG_SIZE = 2;

    c_x = WIDTH*Math.random();
    c_y = HEIGHT*Math.random();
    c_r = MIN_C + (MAX_C-MIN_C)*Math.random();
    c_f = 2+4*(Math.random())

    v_x = 2*(Math.random());
    v_y = 2*(Math.random());

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
    frame = 0;
}

function draw() {
    background(0);

    for(var i=0;i<N_CIRCLE;i++){
        fill(0);
        circle(
            c_x,
            c_y,
            c_r
        )
    }

    for(var i=0;i<BACKGROUND_POINTS;i++){
        d_center = ((background_c[i][0] - c_x)**2 + (background_c[i][1] - c_y)**2)**(0.5);
        d = d_center - c_r/2;
        if (d>0){
            p_i = Math.sin(2*PI*c_f*(d/HEIGHT)-2*PI*(frame/25));  
            p_i = (max(0,HEIGHT-d)/(HEIGHT))*(p_i+1)/2;
            //fill(255*p_i);
            fill(255);
            if (p_i>Math.random()){
                noStroke();
                circle(
                    background_c[i][0],
                    background_c[i][1],
                    CIRCLE_BG_SIZE
                );
            }  
        }
    }

    // c_x+=v_x;
    // c_y+=v_y;

    if(c_x>WIDTH | c_x<0){
        v_x=-v_x;
    }
    if(c_y>WIDTH | c_y<0){
        v_y=-v_y;
    }

    frame++;
}
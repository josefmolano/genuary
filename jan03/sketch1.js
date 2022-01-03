// https://pixabay.com/photos/planets-inner-planets-11060/
// https://pixabay.com/photos/space-universe-solar-system-4641363/

let bg;
let sun;
let textures;
function preload() {
    bg = loadImage('./images/background.jpg');
    sun = loadImage('./images/sun.png');
    mercury = loadImage('./images/mercury.png');
    venus = loadImage('./images/venus.png');
    earth = loadImage('./images/earth.png');
    mars = loadImage('./images/mars.png');
    jupiter = loadImage('./images/jupiter.png');
    textures = [
        mercury,
        venus,
        earth,
        mars,
        jupiter
    ];
}

function setup() {
    HEIGHT = 700;
    WIDTH = 700;
    PLANET_SIZE = 25;
    SUN_SIZE = 50;
    ORBIT_RATIO = 0.33;
    ORBIT_SIZE = [
        0.39,
        0.72,
        1,
        1.52,
        2.77
    ]
    ORBIT_DURATION = [
        87,
        219,
        365,
        686,
        4328
    ]
    PLANET_COLOR = [
        color(223, 125, 40),
        color(239, 214, 114),
        color(101, 147, 255),
        color(255, 68, 68),
        color(255, 184, 75),
    ]
    PLANET_SIZES = [
        15,
        25,
        30,
        20,
        35,
    ]
    planet_ang = [
        0,
        0,
        0,
        0,
        0
    ]
    days = 0;

    createCanvas(WIDTH, HEIGHT, WEBGL);

    offset_x = 0;
    offset_y = 0;

    timer = 0;
    timer_direction = 1;
}

function draw() {
    background(0,0,0);
    strokeWeight(0);

    //Background
    texture(bg);
    rect(-WIDTH/2,-HEIGHT/2,WIDTH,HEIGHT)

    // Sun
    //fill(255,179,0);
    texture(sun);
    circle(offset_x,offset_y, SUN_SIZE);

    // Planets
    for (var i=0;i<ORBIT_SIZE.length;i++){
        planet_ang[i] = planet_ang[i] - 1.5*2*Math.PI/ORBIT_DURATION[i];
        cos_ang = Math.cos(planet_ang[i]);
        sin_ang = Math.sin(planet_ang[i]);
        r = WIDTH/2*ORBIT_SIZE[i]*ORBIT_RATIO;
        x = r*cos_ang;
        y = r*sin_ang;
        if (i==2){
            offset_x=-x * max(0,min(timer, 365))/(365);
            offset_y=-y * max(0,min(timer, 365))/(365);
        }
        // if (planet_ang[i]<-360){
        //     planet_ang[i]=0; 
        // }
        //fill(PLANET_COLOR[i]);
        texture(textures[i]);
        circle(x + offset_x,y + offset_y,PLANET_SIZES[i]);
    }

    timer+=timer_direction;
    if (timer>=365*2){
        timer_direction=-1;
    }
    if (timer<=-365*1){
        timer_direction=1;
    }
    //console.log(days)
}
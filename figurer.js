function blomst(x, y, size) 
{
    size = size / 2
    blade = 6;
    trin = TWO_PI/blade;
    for(i=0; i<TWO_PI; i+=trin)
        circle(x+cos(i)*size, y+sin(i)*size, size);
    circle(x, y, size*1.5); 
}

function ansigt(x, y, size)
{
    push();
    circle(x, y, size);
    m = size / 10;
    fill("#FFF");
    arc(x, y, size-m, size-m, 0, PI, CHORD);
    strokeWeight(3);
    line(x-m, y-size/2+m, x-m, y-m);
    line(x+m, y-size/2+m, x+m, y-m);
    pop();
}

function bølge(y, size)
{
    for(i=0; i<width; i+=0.01) {
        x = i * size
        yOffset = cos(i) * size
        point(x, y+yOffset);
    }  
}

function overskrift(x, y, text, size) {
    fill("#FFFFFF")
    strokeWeight(5)
    stroke("#000000")
    textSize(size);
    textFont('Georgia');
    text(text, x, y);    
}
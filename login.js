// var canvasDiv = document.getElementById('art');
// var width = canvasDiv.offsetWidth;
// var height = canvasDiv.offsetHeight;

function setup(){

    var sketchCanvas = createCanvas(600, 800);
        sketchCanvas.parent('art');

    angleMode(DEGREES);

}

function draw(){

    background('#fff');
    
    //basic shapes
    translate(200, 200);
    rotate(180);
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 400, 400, 0, 90);
    
    resetMatrix();
    
    translate(300, 100);
    noStroke();
    fill('#a4b8ea');
    ellipse(0, 0 , 200, 200);
    
    resetMatrix();

    translate(500, 100);
    rotate(180);
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 200, 200, 270, HALF_PI);

    resetMatrix();

    translate(500, 100);
    rotate(0);
    rectMode(CENTER);
    fill('#a4b8ea');
    arc(0, 0, 200, 200, 270, HALF_PI);

    resetMatrix();

    translate(500, 300);
    noStroke();
    fill('#425ac2');
    ellipse(0, 0 , 200, 200);

    resetMatrix();

    translate(500, 500);
    noStroke();
    fill('#a4b8ea');
    rect(0, 0 , 200, 200);

    resetMatrix();

    translate(400, 600);
    rotate();
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 400, 400, 0, 90);
    
    resetMatrix();

    translate(300, 700);
    noStroke();
    fill('#425ac2');
    ellipse(0, 0 , 200, 200);


    //#a4b8ea background
    resetMatrix();

    translate(200, 500);
    noStroke();
    fill('#a4b8ea');
    rect(0, 0 , 400, 200);
    
    resetMatrix();

    translate(100, 500);
    noStroke();
    fill('#a4b8ea');
    rect(0, 0 , 200, 600);

    resetMatrix();

    translate(300, 300);
    noStroke();
    fill('#a4b8ea');
    rect(0, 0 , 200, 200);

    //difficult shapes
    resetMatrix();

    translate(400, 400);
    rotate(180);
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 400, 400, 270, HALF_PI);

    resetMatrix();

    translate(200, 200);
    rotate(90);
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 400, 400, 270, HALF_PI);
    
    resetMatrix();

    translate(0, 200);
    rotate(0);
    rectMode(CENTER);
    fill('#425ac2');
    triangle(0, 200, 200, 0, 200, 200);
    
    resetMatrix();

    translate(0, 600);
    rotate(0);
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 400, 400, 270, HALF_PI);
    
    resetMatrix();

    translate(200, 600);
    rotate(180);
    rectMode(CENTER);
    fill('#425ac2');
    arc(0, 0, 400, 400, 270, HALF_PI);

    resetMatrix();

}

function windowResized() {
    resizeCanvas(600, 800);
  }
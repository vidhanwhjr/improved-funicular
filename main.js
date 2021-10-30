function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
}

function draw(){
    image(img, 0, 0, 300, 300);
}

function download(){
    save('myjokerpicture.png')
}
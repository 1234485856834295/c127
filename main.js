song="";

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(560,250);

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
}

function hi(){
    song.play();
}
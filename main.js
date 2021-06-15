function setup(){
    canvas=createCanvas(800,600);
    canvas.center();
    video=createCapture(800,600);
    video.hide();

}

function draw(){
    image(video,0,0,800,600);
}

function preload(){
    alarm=loadSound("alarm_r.mp3");
}
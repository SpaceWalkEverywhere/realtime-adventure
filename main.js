function preload(){

}
function setup(){
    can=createCanvas(350,300);
    can.position(450);
    cam=createCapture(VIDEO);
    cam.hide();
}
function draw(){
    image(cam,0,0,350,300);

}

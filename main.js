function preload(){

}
function setup(){
    can=createCanvas(350,300);
    can.position(450);
    cam=createCapture(VIDEO);
    cam.hide();
    classify=ml5.imageClassifier('mobileNet',modlod);
}
function draw(){
    image(cam,0,0,350,300);
    classify.classify(cam,grrr);
}
function modlod(){
    console.log("model is loaded");
}
function grrr(error,res){
    if(error){
        console.error(error);
    }
    else{
     console.log(res);  
     document.getElementById('res-acc').innerHTML=res[0].confidence;
     document.getElementById('res-obj').innerHTML=res[0].label;
    }
}



function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(600,150);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    background('orange');
}
function modelloaded(){
    console.log("PoseNet initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
var models = [ 'cloud','circle','car','bird','ball' ]
var randomnumber = Math.floor(Math.random(0,4))
var sketch = models[randomnumber]
var answer_holder = ""
var score = 0
var timer_counter = ""
var drawn_sketch = ""
var timer_check = ""

function preload() {
classifier=ml5.imageClassifier("DoodleNet")
}

function setup() {
canvas = createCanvas(400,400)
canvas.center()
canvas.mouseReleased(classifycanvas)
}

function draw() {
    strokeWeight(8)
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
    
    document.getElementById("sketchtobedrawn").innerHTML = sketch
  check_sketch()
  if (sketch == drawn_sketch) {
    answer_holder = "set"
    score = score + 1
    document.getElementById("score").innerHTML = score

  }
}
function updateCanvas(){
 background("white")
}
function classifycanvas () {
  classifier.classify(canvas, gotResult)
}
function gotResult(error, results) {
  if (error) {
    console.log(error)
  } else if (results) {
    console.log(results)
    drawn_sketch = results[0].label
    document.getElementById("label").innerHTML = drawn_sketch 
    document.getElementById("confidence").innerHTML = Math.round(results[0].confidence*100)+ "%"

  }
}

function check_sketch() {
 timer_counter++
document.getElementById("timer").innerHTML = timer_counter
console.log(timer_counter)
if (timer_counter > 400) {
    timer_counter = 0
timer_check = "completed"
}
if (timer_check == "completed" || answer_holder == "set" ) {
  timer_check == "empty"
  answer_holder == "empty"
  updateCanvas()
} 
}


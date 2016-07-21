window.onload = function (){
var form = document.getElementById("benchMaxForm");
    weight = document.getElementById("benchWeight");
    reps = document.getElementById("benchReps");

var formS = document.getElementById("squatMaxForm");
    weightS = document.getElementById("squatWeight");
    repsS = document.getElementById("squatReps")

var formD = document.getElementById("deadliftMaxForm");
    weightD = document.getElementById("deadliftWeight");
    repsD = document.getElementById("deadliftReps");

var formBW = document.getElementById("bwForm");
    bW = document.getElementById("bodyWeight");
    
var slider = document.getElementById("kg");

slider.onchange = function() {
  benchMax/2.2;
  squatMax/2.2;
  deadliftMax/2.2;
  bodyWeight/2.2;


}

formBW.oninput = function() {
  var bodyWeight = bW.value;

  console.log(bodyWeight);

if (bodyWeight > 0) {
      console.log(bodyWeight);
      document.getElementById("target4").innerHTML = bodyWeight

  }
};


form.oninput = function() {
   var benchWeight = weight.value;
   var benchReps = reps.value;
   console.log(benchWeight);
   console.log(benchReps);

if (benchWeight > 500) {
  alert("Shut up liar");
}
else if(isNaN(benchWeight)){
  alert("Put in a real number")
}
if (benchReps > 20) {
  alert("Do less cardio");
}
else if(isNaN(benchReps)){
  alert("u wot")
}
var repArray = [0, 1, 1.07, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33];
var bRep = repArray[benchReps];
var benchMax = benchWeight * bRep;

benchMax = Math.round(benchMax/5)*5

if (isNaN(benchMax)) {
  benchMax = 0
}
else {
  document.getElementById("target1").innerHTML = benchMax
  document.getElementById("benchBar").value = benchMax

}

};


formS.oninput = function() {
   var squatWeight = weightS.value;
   var squatReps = repsS.value;
   console.log(squatWeight);
   console.log(squatReps)

if (squatWeight > 500) {
  alert("Shut up liar");
}
else if(isNaN(squatWeight)){
  alert("Put in a real number")
}
if (squatReps > 20) {
  alert("Do less cardio");
}
else if(isNaN(squatReps)){
  alert("u wot")
}
var repArray = [0, 1, 1.07, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33];
var sRep = repArray[squatReps];
var squatMax = squatWeight * sRep;

squatMax = Math.round(squatMax/5)*5

if (isNaN(squatMax)) {
  squatMax = 0
}
else {
  document.getElementById("target2").innerHTML = squatMax
  document.getElementById("squatBar").value = squatMax
}

};



formD.oninput = function() {
   var deadliftWeight = weightD.value;
   var deadliftReps = repsD.value;
   console.log(deadliftWeight);
   console.log(deadliftReps)

if (deadliftWeight > 500) {
  alert("Shut up liar");
}
else if(isNaN(deadliftWeight)){
  alert("Put in a real number")
}
if (deadliftReps > 20) {
  alert("Do less cardio");
}
else if(isNaN(deadliftReps)){
  alert("u wot")
}
var repArray = [0, 1, 1.07, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33];
var dRep = repArray[deadliftReps];
var deadliftMax = deadliftWeight * dRep;

deadliftMax = Math.round(deadliftMax/5)*5

if (isNaN(deadliftMax)) {
  deadliftMax = 0
}
else {
  document.getElementById("target3").innerHTML = deadliftMax
  document.getElementById("deadliftBar").value = deadliftMax
}

};
}

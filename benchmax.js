window.onload = function (){

var form = document.getElementById("benchMaxForm");
    weight = document.getElementById("benchWeight");
    reps = document.getElementById("benchReps");

form.onsubmit = function() {
   var benchWeight = weight.value;
   var benchReps = reps.value;
   console.log(benchWeight);
   console.log(benchReps)

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

document.getElementById("target").innerHTML = benchMax
};
}

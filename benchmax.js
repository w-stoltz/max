var bench = prompt("What is your bench");
if (bench > 500) {
  console.log("Shut up liar");
  var bench = prompt("What is your bench");
}
else if(isNaN(bench)){
  console.log("Put in a real number")
  var bench = prompt("What is your bench");
}

var benchreps = prompt("How many reps");
if (benchreps > 20) {
  console.log("Do less cardio");
  var benchreps = prompt("How many reps");
}
else if(isNaN(benchreps)){
  console.log("u wot")
  var benchreps = prompt("how many reps");
}
var reps = [0, 1, 1.07, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33];
var bRep = reps[benchreps];
benchMax = bench * bRep;
console.log(benchMax);

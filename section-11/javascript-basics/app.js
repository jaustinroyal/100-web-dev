let name = "James Austin";
let age = 14;
let hobbies = ["Cycling", "Badminton(in progress)", "Coding"];
let job = {
  title: "Developer",
  place: "Unknown",
  salary: "Infinite",
};

let haveBeenAdultFor = age - 18;

function calcAdultYears(userAge) {
  return userAge - 18;
}

age = 16;
alert(calcAdultYears(1884));

age = 20;
haveBeenAdultFor = calcAdultYears(24);
alert(haveBeenAdultFor);

{
  // function calcAdultYears(userAge) {
  //   return (age - 18);
  // }
  //
  // alert("Result of job['title'] = " + job["title"]);
  // alert("Result of job.title = " + job.title);
  //
  //   if (haveBeenAdultFor < 0) {
  //   alert("You will turn 18 after " + (haveBeenAdultFor * -1) + " years :)");
  // } else if(haveBeenAdultFor == 0){
  //     alert("You just turned an adult! Yay!!! :D");
  // } else {
  //   alert("You have been an adult for " + haveBeenAdultFor + " years! :D");
  // }
}

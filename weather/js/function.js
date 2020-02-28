
'use strict';

/* *************************************
* WEATHER SITE JAVASCRIPT FUNCTIONS *
************************************* */

 //Js to get the Current Date
const options = {weekday: "long", day: "numeric", month:"short", year: "numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);


//Js to get the last modified date
function buildModDate(){
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let lastMod = new Date(document.lastModified);
    const dayName = dayArray[lastMod.getDay()];
    const monthName = monthArray[lastMod.getMonth()];
    const formattedDate = dayName+", "+lastMod.getDate() +" "+monthName+", "+lastMod.getFullYear();
    document.querySelector('#lastmodify').innerText = formattedDate;
   }

   //variables for responsive menu
var mobileMenuClicks = 0;

//Handles Small Screen Menu
function burgerMenu(){
  //how many times responive menu used
  if (mobileMenuClicks == 0)
    console.groupCollapsed("Times Mobile Menu Toggled");
    mobileMenuClicks += 1;
    console.log(mobileMenuClicks);
  //declare variables
  const x = document.getElementById("navbar");
  const y = document.getElementById("footer");
  //if the buttun is tapped and the components are hidden, show them
  if (x.className === "hidden") {
    x.className = "shown";
    y.className = "large-footer";
  }
  //if the items are already shown, hide them 
  else {
    x.className = "hidden";
    y.className = "small-footer";
  }
}
/* ##################################################
//This function calculates the WindChill
###################################################### */
function buildWC(speed, temp) {
  let feelTemp = document.getElementById("feelTemp");

//This formular Computes the windchill value
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
 console.log(wc);

 //Round the answer down to integer
  wc = Math.floor(wc);

  //IF chill is greater than temp, return the temp
  wc = (wc > temp)?temp:wc;

  //Display the windchill result
  console.log(wc);
  feelTemp.innerHTML = wc;
}

/* ###########################################################################
Function for Time indicator
########################################################################## */
function timeBall(hour){
  //find all "ball" classes and remove them
  let x = document.querySelectorAll(".ball");
  for (let item of x) {
          console.log(item);
          item.classList.remove("ball");
  }

  //Find all hours that match the parameter and add the "ball"
  let hr = document.querySelectorAll(".p"+hour);
  for (let item of hr){
  item.classList.add("ball");
}}

/* ##################################################################
Function for changing the background image surrounding the weather 
condition boxes
##################################################################### */
function changeSummaryImage(curCond){
let selectImage = document.querySelector(".clear");
selectImage.classList.add(curCond);
}
 
/* *****************************************************************
* WEATHER SITE JAVASCRIPT INSTRUCTIONS THAT CALLS VARIOUS FUNCTIONS *
****************************************************************** */
// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    buildModDate();
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener('click', burgerMenu);
//Variables for wind chill function
let temp = 60;
let speed = 4.8;
buildWC(speed, temp);
//The Time Indicator function
let hour="10";
timeBall(hour);
console.log(hour);
//Background image change
let curCond = "fog";
curCond = curCond.toLowerCase();
changeSummaryImage(curCond);
console.log(curCond);
  })
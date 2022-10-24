"use strict";
/*

   Author: Maddie Ligorano
   Date:   5/1/2022

*/

/* Excute */
showClock();
setInterval("showClock()", 1000);

/* function to creat and run the countdown clock */

function showClock(){
  var thisDay = new Date();
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();
  document.getElementById("currentTime").innerHTML ="<span>"+localDate+"</span> <span>" + localTime + "</span>";

  var eDate =endOfClass(thisDay);
  eDate.setHours(24);

  /* Calculate days hours mins and seconds */
  var days = (eDate -thisDay)/(1000*60*60*24);
  var hrs = (days - Math.floor(days))*24;
  var mins =(hrs- Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;
  /* Display the clock */
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hrs);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);
}

function endOfClass(currentDate) {
   var cYear = currentDate.getFullYear();
   var endDate = new Date("May 3, 2022");
   endDate.setFullYear(cYear);
   if ((endDate - currentDate) < 0) endDate.setFullYear(cYear + 1);
   return endDate;
}

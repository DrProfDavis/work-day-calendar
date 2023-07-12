// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  var btnEl = document.getElementById('btn');
  // btnEl.on('click', function() {
  //   var hours = $(this).parent().attr('id').split('-')[1];
  //   var text = $(this).parent().find('description').val();
  //   localStorage.setItem(hours, text);
  // });

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // Most code towards bottom for this since it was long

  var hour9Text = document.getElementById('hour-9');
  var hour10Text = document.getElementById('hour-10');
  var hour11Text = document.getElementById('hour-11');
  var hour12Text = document.getElementById('hour-12');
  var hour13Text = document.getElementById('hour-13');
  var hour14Text = document.getElementById('hour-14');
  var hour15Text = document.getElementById('hour-15');
  var hour16Text = document.getElementById('hour-16');
  var hour17Text = document.getElementById('hour-17');
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Running out of time and I am unable to get localStorage working
  // My attempt was to set the hour and the saved text into local storage to be called on refresh but did not get it working

  // localStorage.setItem("hour-9", hours);
  // localStorage.getItem("hour-9");
  // localStorage.setItem("hour9Text", text);
  // localStorage.getItem("hour9Text");
  
  // TODO: Add code to display the current date in the header of the page.
  const date = new Date();
  let currentDate = document.getElementById('currentDay');
  let currentTime = document.getElementById('currentTime');

  let minutes = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // Turns numbers into words
  if (month == 0){ wordMonth = "January"}
  if (month == 1){ wordMonth = "February"}
  if (month == 2){ wordMonth = "March"}
  if (month == 3){ wordMonth = "April"}
  if (month == 4){ wordMonth = "May"}
  if (month == 5){ wordMonth = "June"}
  if (month == 6){ wordMonth = "July"}
  if (month == 7){ wordMonth = "August"}
  if (month == 8){ wordMonth = "September"}
  if (month == 9){ wordMonth = "October"}
  if (month == 10){ wordMonth = "November"}
  if (month == 11){ wordMonth = "December"}

  // Am or Pm designator
  displayHour = hour;
  if (hour < 12){ dayTime = 'AM'};
  if (hour >= 12){ dayTime = 'PM'};
  if (hour >= 12){ displayHour=displayHour-12};


  // Display current Date and Time
  var formattedMinutes = ("0" + minutes).slice(-2);
  currentDate.innerText = `${wordMonth} ${day}, ${year}`;
  currentTime.innerText = `${displayHour}:${formattedMinutes} ${dayTime}`;  

  // Set Past, Present, and Future
  // I know this could be slimmed down with a for loop and I tried for too long and just wanted it to work. 
  // Below is part of my code I was gunna use to try and make it happen that was also going to help me set into localStorage

    // btnEl.on('click', function() {
  //   var hours = $(this).parent().attr('id').split('-')[1];
  //   var text = $(this).parent().find('description').val();
  //   localStorage.setItem(hours, text);
  // });


  if (hour > 9) {
    hour9Text.classList.add('past');
  }else if(hour == 9) {
    hour9Text.classList.add('present');
  }else {
    hour9Text.classList.add('future');
  }
  if (hour > 10) {
    hour10Text.classList.add('past');
  }else if(hour == 10) {
    hour10Text.classList.add('present');
  }else {
    hour10Text.classList.add('future');
  }
  if (hour > 11) {
    hour11Text.classList.add('past');
  }else if(hour == 11) {
    hour11Text.classList.add('present');
  }else {
    hour11Text.classList.add('future');
  }
  if (hour > 12) {
    hour12Text.classList.add('past');
  }else if(hour == 12) {
    hour12Text.classList.add('present');
  }else {
    hour12Text.classList.add('future');
  }
  if (hour > 13) {
    hour13Text.classList.add('past');
  }else if(hour == 13) {
    hour13Text.classList.add('present');
  }else {
    hour13Text.classList.add('future');
  }
  if (hour > 14) {
    hour14Text.classList.add('past');
  }else if(hour == 14) {
    hour14Text.classList.add('present');
  }else {
    hour14Text.classList.add('future');
  }
  if (hour > 15) {
    hour15Text.classList.add('past');
  }else if(hour == 15) {
    hour15Text.classList.add('present');
  }else {
    hour15Text.classList.add('future');
  }
  if (hour > 16) {
    hour16Text.classList.add('past');
  }else if(hour == 16) {
    hour16Text.classList.add('present');
  }else {
    hour16Text.classList.add('future');
  }
  if (hour > 17) {
    hour17Text.classList.add('past');
  }else if(hour == 17) {
    hour17Text.classList.add('present');
  }else {
    hour17Text.classList.add('future');
  }
});

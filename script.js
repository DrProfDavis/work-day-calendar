// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // startButtonEl.addEventListener("click", startQuiz);
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  const date = new Date();
  let currentDate = document.getElementById('currentDay');
  let currentTime = document.getElementById('currentTime');
  var hour9Text = document.getElementById('hour-9');
  var hour10Text = document.getElementById('hour-10');
  var hour11Text = document.getElementById('hour-11');
  var hour12Text = document.getElementById('hour-12');
  var hour13Text = document.getElementById('hour-13');
  var hour14Text = document.getElementById('hour-14');
  var hour15Text = document.getElementById('hour-15');
  var hour16Text = document.getElementById('hour-16');
  var hour17Text = document.getElementById('hour-17');

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

  // Display current Date and Time
  currentDate.innerText = `${wordMonth} ${day}, ${year}`;
  currentTime.innerText = `Time: ${hour}h ${minutes}m`;  

  // Set Past, Present, and Future
  // I know this could be slimmed down with a for loop and I tried but it never worked out

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

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
  // var currentDateEl = document.getElementById('currentDay');

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // month selector
  if (month == 0){ month = "January"}
  if (month == 1){ month = "February"}
  if (month == 2){ month = "March"}
  if (month == 3){ month = "April"}
  if (month == 4){ month = "May"}
  if (month == 5){ month = "June"}
  if (month == 6){ month = "July"}
  if (month == 7){ month = "August"}
  if (month == 8){ month = "September"}
  if (month == 9){ month = "October"}
  if (month == 10){ month = "November"}
  if (month == 11){ month = "December"}

  currentDate.innerText = `${month} ${day}, ${year}`;
  currentTime.innerText = `Time: ${hours}h ${minutes}m`;  
  console.log(currentDate);

  // compare dates
  function compareDates(d1, d2) {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();

    if (date1 < date2) {
      console.log(`${d1} is less than ${d2}`);
    } else if (date1 > date2) {
      console.log(`${d1} is greater than ${d2}`);
    } else {
      console.log(`Both dates are equal`);
    }
  };
  console.log(date);
  compareDates(currentDate, "07/28/2021");
  compareDates(currentDate, "01/01/2001");
  compareDates(currentDate, "02/01/2022");
});

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function (){


// STEP 1 ++++++++++++++++++
var robotContainer = document.getElementById('robot-container');
robotContainer.addEventListener('click', function (event){

})

//   var robotLinks = document.querySelectorAll('.robot > a');
// // go thru each link
//   for (var i = 0; i < robotLinks.length; i++) {
// add event - listen for the click event - when the click is heard we run this function

STEP 2
// +++++++++++++++++++
//     robotLinks[i].addEventListener('click', function(event){
      event.preventDefault();

// Step 3     // the default behaviour of clicking on the link
var anchor = event.target.ParentNode();
var url = anchor.href;
// STEP 3 ++++++++++++++++++++
// Make ajax request
// you need to fetch the data
// if the click event is deteched. I have clicked on an element some click has
// generated that event. THIS is the element that generated the click.
// since is a link since our a href is a link

// this is a jQuery method- we have to install jQuery to use
// gem 'jquery-rails' in file then bundle install in console,
// open application.js file and = require jquery
// var url = this.href;
// or
// var url - document.querySelector('href')
// step 4
$.ajax({
  url: url,
  method: 'GET'
  dataType: 'json'
}).done(function(data){
  // the data that comes back
  // take this data and stick it into the box
  // find the selector
  // query the id
  var robotDetails = document.querySelector('#robot-details');
  robotDetails.innerHTML = data;

});




    });


  }
});

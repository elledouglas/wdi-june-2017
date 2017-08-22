// // Global scope
//
// $(document).ready(function() {
//   // Function scope
document.addEventListener('DOMContentLoaded', function ();
  var count = 0,
      colors = ['tomato', 'azure', 'green', 'orange', 'purple', 'chartreuse', 'yellow', 'chocolate'];


var boxMaker = document.querySelector('#box-maker');

boxMaker.addEventListener('click', function(e) {
      var x = Math.ceil(Math.random() * 400),
          y = Math.ceil(Math.random() * 200),
          c = Math.ceil(Math.random() * 8);




          var container = document.querySelector('#container')
          var newCircle = document.createElement('div')


container.addEventListener('click', function(e){
  if (e.target.className === 'circle'){
    e.target.remove();
  }


});

          e.preventDefault();

          newCircle.className = 'circle'

          newCircle.style.top = y + 'px';
          newCircle.style.left = x + 'px';

          newCircle.style.backgroudColor = colors[c];

          newCircle.innerHTML = count++;

          container.append(newCircle, function(e)
          e.target.remove();
          // this is like self
          // this is always going to be the element that received the event.

          console.log('link')





      // $('<div class="circle"></div>')
  //         .css({
  //             top: y,
  //             left: x,
  //             backgroundColor: colors[c]
  //         })
  //         .html(count++)
  //         .appendTo('#container');
  //
  //     console.log('link was clicked');
  // });
});

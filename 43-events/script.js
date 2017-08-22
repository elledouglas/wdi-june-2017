var clickBait = document.querySelector('click-bait');

clickBait.addEvenlistener('click', function(){
  window.alert('#click-bait was clicked');
})

var secondLevel = document.querySelector('#second=level');

function secondLevelEventHandler() {
window.alert('#second-level received a click event');
}

secondLevel.addEventListener('click', secondLevelEventHandler);

var firstLevel = document.querySelector('first-level');

var firstLevelEventHandler = function() {
  window.alert('#first-level received a click event');
}

firstLevel.addEventListener('click', firstLevelEventHandler);

var firstLevel = document.querySelector('#first-level');

var firstLevelEventHandler = function(){

}

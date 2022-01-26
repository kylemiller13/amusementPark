$(document).ready(function() {
  const height = parseInt(prompt("How tall are you in feet?"));

  if (height >= 6){
    $('#all-rides').show();
  } else {
    $('#kids-rides').show();
  }

});
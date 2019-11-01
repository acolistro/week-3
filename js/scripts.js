//Business logic


//User interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#number").val());

  for (var currentNumber = 0; currentNumber <= num; currentNumber += 1) {
    num += currentNumber;
  }

  var count = function(num) {
    if (num.includes("1") === true) {

    }

  }

  $("#main").hide();
  $("#output").show();


  });
});

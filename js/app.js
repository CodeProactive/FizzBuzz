$(() => {

var maxFizzBuzz = Number(prompt("Insert a number that will be the maximum numer for the FizzBuzz test"))
var my_container = document.getElementById("container")

  for (var i = 1; i < maxFizzBuzz +1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
       $newdiv = $('<div class="ball" />').text("FizzBuzz");
      $('body').append($newdiv);
      console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
      $newdiv = $('<div class="ball" />').text("Fizz");
      $('body').append($newdiv);
      console.log("Fizz")
    }
    else if (i % 5 == 0) {
      $newdiv = $('<div class="ball" />').text("Buzz");
       $('body').append($newdiv);
       console.log("Buzz")
    }
    else{
       $newdiv = $('<div class="ball" />').text(i);
       $('body').append($newdiv);
       console.log(i)
    }
  }        
});

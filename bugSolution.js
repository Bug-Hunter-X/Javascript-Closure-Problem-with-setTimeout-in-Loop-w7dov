function myFunction() {
  for (let i = 0; i < 10; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunction();
//Alternative solution using let
function myFunction2() {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
    }
  }
  
  myFunction2();
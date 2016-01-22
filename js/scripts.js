var listNumbers = function (input) {
var numbers = []
for(var i = 1; i<=input; i++) {
numbers.push(i)
}
return(numbers)
}
var replaceNumbers = function (input) {
  var replaceNumbers = listNumbers(input);
  var newArray = []
  replaceNumbers.forEach(function(number) {
    if(number % 15 === 0) {
      number = "PingPong"
      newArray.push(number)
    }else if(number % 5 === 0) {
      number = "Pong"
      newArray.push(number)
    }else if(number % 3 === 0) {
      number = "Ping"
      newArray.push(number)
    }else{
      newArray.push(number)
    }
    console.log(newArray)
    return newArray
  })
}



$(document).ready(function() {


})

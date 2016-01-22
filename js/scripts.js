var listNumbers = function (input) {
var numbers = []
for(var i = 1; i<=input; i++) {
numbers.push(i)
}
return(numbers)
}
var replaceNumbers = function (input) {
  var replacing = listNumbers(input);
  var newArray = []
  var text = ""

  for (var i = 1; i<=replacing.length; i++) {
        if(i % 15 === 0) {
          text += "<li>PingPong</li>"
        }else if(i % 5 === 0) {
          text += "<li>Pong</li>"
        }else if(i % 3 === 0) {
          text += "<li>Ping</li>"
        }else{
          text += "<li>" + i + "</li>"
        }
  }
  console.log(text)
  return text

};
$(document).ready(function() {
  $("#submit").click(function () {
    var entry = $("#input").val()
    var final = replaceNumbers(entry);
    $("h1").append(final)
  });

})

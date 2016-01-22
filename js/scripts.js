var listNumbers = function(input) {
    var numbers = []
    // debugger;
    if(isNaN(input)){
      alert = alert("Please enter a number")
      return alert
    }else {
    for (var i = 1; i <= input; i++) {
        numbers.push(i)
    }
    return numbers
  }

}
var replaceNumbers = function(input) {
    var numArray = listNumbers(input);
    var text = ""
    for (var i = 1; i <= numArray.length; i++) {
        if (i % 15 === 0) {
            text += "<li>PingPong</li>"
        } else if (i % 5 === 0) {
            text += "<li>Pong</li>"
        } else if (i % 3 === 0) {
            text += "<li>Ping</li>"
        } else {
            text += "<li>" + i + "</li>"
        }
    }
    return text
};

var blinks = function(input) {
  var replace = replaceNumbers(input);
  return replace
}

var other = function(input) {
  var other = blinks(input);
  console.log(other)
  return other

}
//
// $(document).ready(function() {
//     $("#submit").click(function() {
//         var entry = $("#input").val()
//         var final = replaceNumbers(entry);
//         $("#hidden").show()
//         $("li").text("")
//         $("li").append(final)
//     });
//
// })

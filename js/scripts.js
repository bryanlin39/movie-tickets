// business end

function details(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

function price(movie, age, time) {
  var cost = 8;
  if(movie === "Logan 3D" || movie === "Get Out 3D"){
    cost+=2
  }
  if(age==="11-64"){
    cost+=2
  }
  if(time>=16){
    cost+=2
  }
  return cost;
}

// user interface
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("#movie").val();
    var inputtedAge = $("#age").val();
    var inputtedTime = parseInt($("#time").val());

    var patron = new details(inputtedMovie, inputtedAge, inputtedTime);
    cost = price(patron.movie, patron.age, patron.time);

    $("#ticketPrice").text(cost);
    $(".output").show();
  });
});

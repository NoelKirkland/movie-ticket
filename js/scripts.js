//Business Logic

function Ticket(movie, time, age, discounts){
  this.movie = movie,
  this.time = time,
  this.age = age,
  this.discounts = discounts
}

Ticket.prototype.ticketPrice = function(ticketPrice, discountPrice){
  let outputPrice = 0;
  outputPrice = ticketPrice - (discountPrice * this.discounts);
  return outputPrice;
}




//UI Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    const inputMovie = $("select#movie option:selected").text();
    const inputTime = $("select#time option:selected").text();
    const inputAge = $("select#age option:selected").text();
    let discount =0;
    $("select").each(function(){
      discount += parseInt($(this).val());
    })
    const inputDiscounts = discount;
    let ticket = new Ticket(inputMovie, inputTime, inputAge, inputDiscounts);
    const outputPrice = ticket.ticketPrice(16, 2);
    $(".movie").text(ticket.movie);
    $(".time").text(ticket.time);
    $(".age").text(ticket.age);
    $(".price").text(outputPrice);
    $("#show-input").show();

  });
});


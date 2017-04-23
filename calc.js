//Calculator structure

const expressionStart = "";
var expression = "";
var answer = "";

$(document).ready(function() {
  $(".item").on("click", function() {
    expression = expression.concat($(this).text());
    console.log(expression);
    $(".readOut").html(expression);
  });
  $(".clear").on("click", function() {
    expression = expressionStart;
    $(".readOut").html(expression);
  });
  $(".enter").on("click", function() {
    answer = eval(expression);
    $(".readOut").html(answer);
    console.log(answer);
    expression = answer.toString();
    console.log(expression);
  });
});

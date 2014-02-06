$(document).ready(initialize);

function initialize(){
  $(".button").click(displayNumber);
  $(".sign").click(changeSign);
  $(".push").click(pushToQueue);
}

function displayNumber(){
  var display = $("#IO input").text();
  var current = this.textContent;
  var output;

  if (current === "." && display.indexOf(".") !== -1) return;

  if (display === "0" && current !== ".")
    output = current;
  else
    output = display + current;

  $("#IO input").text(output);

}

function pushToQueue(){
   var display = $("#IO").text();
  $("#IO").text("0");
  var li = $("<li>");
  ('#IO').text(this.textContent);
  var $li = $("<li>");
  $li.text(display);
  $("#queue").prepend($li);
}

function compute() {
  var operator = this.id;

  switch(operator){
    case 'add':
     var $lis = $('#queue');
     var a = parseFloat($lis[0].textContent);
     var b = parseFloat($lis[1].textContent);
     var sum = a + b;
     $("#IO").text(sum);
      $("#queue").empty;
    break;
    case 'sub':
     var $lis = $('#queue')
     var a = parseFloat($lis[0].textContent);
     var b = parseFloat($lis[1].textContent);
     var sum = a -  b;
     $("#IO").text(sum);
     $("#queue").empty; 
    break;
    case 'mult':
     var $lis = $('#queue')
     var a = parseFloat($lis[0].textContent);
     var b = parseFloat($lis[1].textContent);
     var sum = a *  b;
     $("#IO").text(sum);
    break;
    case 'divide':
     var $lis = $('#queue')
     var a = parseFloat($lis[0].textContent);
     var b = parseFloat($lis[1].textContent);
     var sum = a / b;
     $("#IO").text(sum);
    break;
    case 'sigma':
     var $lis = $('#queue')
     var a = parseFloat($lis[0].textContent);
     var b = parseFloat($lis[1].textContent);
     var sum = a / b;
     $("#IO").text(sum);
     break;
    case 'a':

    break;
  }

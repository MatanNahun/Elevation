console.log("hi");

const box1 = `<div id="box1" class="box"> </div>`;

const box2 = `<div id="box2" class="box"> </div>`;

$("body").append(box1);
$("body").append(box2);

$("#box1").hover(function () {
  $("#box2").css("background-color", "red");
  $("#box1").css("background-color", "#8e44ad");
});

$("#box2").hover(function () {
  $("#box1").css("background-color", "red");
  $("#box2").css("background-color", "#8e44ad");
});

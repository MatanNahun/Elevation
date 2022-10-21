console.log("controller");
const model = new Model();
const render = new Render();

["matan", "yossi"];

console.log(model.names);
model.getUserName().then(() => render.renderNames(model.names));
// model.getUserName().then(() => console.log(model.names));

$(".title").on("click", ".change-color-btn", function (event) {
  console.log(this);
  const message = $(this).closest(".card-name").find(".name")[0].textContent;
  if ($(this).closest(".card-name").find(".name")[0].style.color == "green") {
    $(this).closest(".card-name").find(".name")[0].style.color = "pink";
  } else {
    $(this).closest(".card-name").find(".name")[0].style.color = "green";
  }

  console.log(message);
});

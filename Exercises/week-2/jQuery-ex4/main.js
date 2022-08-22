console.log("ssss");

$(".item").on("click", function () {
  if ($(this).data().instock) {
    if ($(this).text() === "Shoe") {
      console.log("shoe");
      $("#cart").append("<div class=cart-item>Shoe</div>");
    } else {
      $("#cart").append("<div class=cart-item>Melon</div>");
    }
  }
});

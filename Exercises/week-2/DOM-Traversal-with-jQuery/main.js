// $(".remove").on("click", function () {
//   alert($(this).closest(".post").data().id);
// });

// $("button").on("click", function () {
//   let relevantInputValue = $(this).closest("div").find("input").val();
//   alert(relevantInputValue);
// });

// $("button").on("click", function () {
//   let relevantText = $(this).closest("div").find("span").text();
//   console.log(relevantText);
// });

// $("button").on("click", function () {
//   const relevantPrint = $(this).siblings("div").find("p").text();
//   console.log(relevantPrint);
//   console.log($(".container").find("p").text());
// });

$(".generator").on("click", function () {
  const id = $(this).closest("div").attr("id");
  console.log(` processor ID: ${id}`);

  const cmp_id = $(this).closest(".computer").attr("data-id");

  const array = [];
  array.push({ cmp_id: `${cmp_id}` });
  console.log(array[0]);

  const bus = $(this).closest(".computer").find("p").text();
  console.log(`BUS: ${bus}`);
});

$(".validator").on("click", function () {
  const generatorText = $(this).closest(".computer").find(".generator").text();
  console.log(generatorText);

  const MB = $(this).closest(".computer").find(".MB").text();
  console.log(MB);

  const QR1 = $(this)
    .closest(".computer")
    .find(".processor")
    .children()
    .eq(0)
    .text();
  console.log(QR1);

  const QR2 = $(this)
    .closest(".computer")
    .find(".processor")
    .children()
    .eq(1)
    .text();

  console.log(QR2);
});

console.log("render");

class Render {
  renderNames(names) {
    const sourceNames = $("#names-template").html();
    const template = Handlebars.compile(sourceNames);
    let newHTML = template({ names });
    $(".title").append(newHTML);
  }

  renderBtn(names, destination) {
    const sourceNames = $("#names-template").html();
    const template = Handlebars.compile(sourceNames);
    let newHTML = template({ message });

    destination.append(newHTML);
  }
}

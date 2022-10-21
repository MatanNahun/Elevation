console.log("controller");
const model = new Model();
const render = new Render();

["matan", "yossi"];

console.log(model.names);
model.getUserName().then(() => render.renderNames(model.names));
// model.getUserName().then(() => console.log(model.names));

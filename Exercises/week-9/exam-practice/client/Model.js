class Model {
  constructor() {
    this.names = [];
  }

  async getUserName() {
    let userNameMessage = await $.get("/name?name=robert");
    this.names.push({ message: userNameMessage });
    console.log("get user name function worked");
  }
}

console.log("model");

// modelCheck = new Model();
// modelCheck.getUserName();

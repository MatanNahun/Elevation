const complaintsHandler = require("./complaintsHandler");
const consts = require("./consts");

let complaint1 = {
  text: "I'm not getting enough money",
  type: consts.FINANCE, //use the FINANCE type from the consts module
};

let complaint2 = {
  text: "My salary hasn't come in yet",
  type: consts.FINANCE, //use the FINANCE type from the consts module
};

let complaint3 = {
  text: "I'm always full of energy",
  type: consts.EMOTIONS, //use the EMOTIONS type from the consts module
};

complaintsHandler.handleComplaints(complaint1); //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaints(complaint2); //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaints(complaint3); //should print "It'll pass, as all things do, with time."

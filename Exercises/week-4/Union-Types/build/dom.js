"use strict";
const domElement = document.querySelector(".foo");
domElement.addEventListener("input", function (event) {
    const e = event.target;
    console.log(e.value);
});
domElement.addEventListener("click", function (event) {
    console.log("hi");
});

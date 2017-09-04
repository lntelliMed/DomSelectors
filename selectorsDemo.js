// different ways to select the first "p" element

var firstP = document.getElementById("first");
console.dir(firstP);

firstP = document.getElementsByClassName("special")[0];
console.dir(firstP);

firstP = document.getElementsByTagName("p")[0];
console.dir(firstP);

firstP = document.querySelector("#first");
console.dir(firstP);

firstP = document.querySelectorAll(".special")[0];
console.dir(firstP);


firstP = document.querySelector("p");
console.dir(firstP);

firstP = document.querySelectorAll("p")[0];
console.dir(firstP);

firstP = document.querySelector("h1 + p");
console.dir(firstP);
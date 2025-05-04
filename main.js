"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
console.log('hej');
//Navigation menu
var menubtn = document.querySelector('.menubtn');
var nav = document.querySelector('.nav');
if (menubtn && nav) {
    menubtn.addEventListener("click", function () {
        menubtn.classList.toggle("active");
        nav.classList.toggle("active");
    });
}
// Example articles below hero section
var article = document.querySelector('#example');
article.innerHTML += "\n<div> Hello wolrd</div>\n<div> Hello</div>\n";


console.log('hej');

//Navigation menu
const menubtn = document.querySelector('.menubtn');
const nav = document.querySelector('.nav');

if (menubtn && nav) {
    menubtn.addEventListener("click", () => {
        menubtn.classList.toggle("active");
        nav.classList.toggle("active");
    });
}


// Example articles below hero section
const article = document.querySelector('#example');
article.innerHTML += `
<div> Hello wolrd</div>
<div> Hello</div>
`;

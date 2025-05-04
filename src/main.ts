

console.log('hej');

//Navigation menu
const menubtn = document.querySelector('.menubtn') as HTMLElement | null;
const nav = document.querySelector('.nav')as HTMLElement | null;

if (menubtn && nav) {
    menubtn.addEventListener("click", () => {
        menubtn.classList.toggle("active");
        nav.classList.toggle("active");
    });
}


// Example articles below hero section
const article = document.querySelector('#example')as HTMLElement;
article.innerHTML += `
<div> Hello wolrd</div>
<div> Hello</div>
`;

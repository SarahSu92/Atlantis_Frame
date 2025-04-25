import './style.css'

//Navigation menu
const menubtn = document.querySelector('.menubtn') as HTMLElement | null;
const nav = document.querySelector('.nav')as HTMLElement | null;

if (menubtn && nav) {
    menubtn.addEventListener("click", () => {
        menubtn.classList.toggle("active");
        nav.classList.toggle("active");
    });
}



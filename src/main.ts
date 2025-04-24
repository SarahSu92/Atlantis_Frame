import './style.css'

//Navigation menu
const menubtn = document.querySelector('.menubtn');
const closebtn = document.querySelector('.closebtn');

menubtn?.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    closebtn.classList.toggle("active");
});
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

document.addEventListener('touchstart', () => {
    const video = document.querySelector('video') as HTMLVideoElement | null;
    if (video && video.paused) {
      video.play().catch((err) => {
        console.error('Video failed to play:', err);
      });
    }
  }, { once: true });

// Example articles below hero section
const article = document.querySelector('#example')as HTMLElement;
article.innerHTML += `
<div> Hello wolrd</div>
<div> Hello</div>
`;

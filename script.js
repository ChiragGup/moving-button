const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
    const randomLeft = Math.floor(Math.random() * 200)+1; // Subtract button width (50px) to keep it inside
    const randomTop = Math.floor(Math.random() * 200)+1; // Subtract button height (50px) to keep it inside

    dangerButton.style.left = randomLeft + "px";
    dangerButton.style.top = randomTop + "px";
});
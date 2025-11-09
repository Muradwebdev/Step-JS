const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const message = document.querySelector(".message");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

let steps;
steps = JSON.parse(localStorage.getItem("step"));

const UpdateUI = () => {
  message.textContent = `Step ${steps}:${messages[steps - 1]}`;
  if (steps >= 1) {
    step1.classList.add("active");
  } else {
    step1.classList.remove("active");
  }
  if (steps >= 2) {
    step2.classList.add("active");
  } else {
    step2.classList.remove("active");
  }
  if (steps >= 3) {
    step3.classList.add("active");
  } else {
    step3.classList.remove("active");
  }
};

UpdateUI();

btnPrevious.addEventListener("click", () => {
  if (steps > 1) {
    steps -= 1;
    console.log(steps);
    UpdateUI();
    localStorage.setItem("step", JSON.stringify(steps));
  }
});

btnNext.addEventListener("click", () => {
  if (steps < messages.length) {
    steps += 1;
    console.log(steps);
    UpdateUI();
    localStorage.setItem("step", JSON.stringify(steps));
  }
});

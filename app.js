const btn = document.querySelectorAll(".btn");
const counter = document.querySelector(".number");

let newNumber = 0;

// Get the requested class and apply the command
btn.forEach((e) => {
  e.addEventListener("click", () => {
    const classResolve = e.classList;
    if (classResolve.contains("increase")) newNumber++;
    else if (classResolve.contains("decrease")) newNumber--;
    else newNumber = 0;
    counter.textContent = newNumber;
  });
});

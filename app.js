const btn = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter");

let newNumber = JSON.parse(localStorage.getItem("count"));

counter.textContent = newNumber;

// Get the requested class and apply the command
btn.forEach((e) => {
  e.addEventListener("click", () => {
    const classResolve = e.classList;
    if (classResolve.contains("increase")) newNumber++;
    else if (classResolve.contains("decrease")) newNumber--;
    else newNumber = 0;

    counter.textContent = newNumber;

    localStorage.setItem("count", JSON.stringify(newNumber));
  });
});

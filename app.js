const btn = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter");
const description = document.querySelector(".container h1");

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

    // Change the color of the description according to the number
    counter.textContent > 0
      ? (description.style.color = "#8bc34ac0")
      : counter.textContent < 0
      ? (description.style.color = "#d32f2fc7")
      : (description.style.color = "#eeeeee");
  });
});

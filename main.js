const input = document.querySelector("#slider");
const val = document.querySelector("#val");

input.addEventListener("input", (event) => {
  const size = event.target.value;
  val.textContent = `Grid Size: ${size} X ${size}`;
});

const create = document.querySelector("#create");
const box = document.querySelector(".box");
create.addEventListener("click", () => {
  const size = Number(input.value);
  box.replaceChildren();
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.boxSizing = "border-box";
    cell.style.border = "1px solid black";
    cell.style.height = `${550 / size}px`;
    cell.style.width = cell.style.height;
    box.appendChild(cell);
    console.log("Created cell");
  }
});

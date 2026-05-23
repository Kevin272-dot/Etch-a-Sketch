const input = document.querySelector("#slider");
const val = document.querySelector("#val");

input.addEventListener("input", (event) => {
  const size = event.target.value;
  val.textContent = `Grid Size: ${size} X ${size}`;
});

let col = "black";
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
let rainbowIndex = 0;
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");
const customize = document.querySelector("#colorInput");

black.addEventListener("click", (event) => {
  col = "black";
});
customize.addEventListener("input", (event) => {
  col = event.target.value;
});
rainbow.addEventListener("click", () => {
  col = "rainbow";
});

const create = document.querySelector("#create");
const box = document.querySelector(".box");
create.addEventListener("click", () => {
  const size = Number(input.value);
  box.replaceChildren();
  drawgrid(size);
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
    cell.style.opacity = "";
  });
});
drawgrid(16);
function drawgrid(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.boxSizing = "border-box";
    cell.style.border = "1px solid black";
    cell.style.height = `${550 / size}px`;
    cell.style.width = cell.style.height;

    console.log("Created cell");
    cell.addEventListener("mouseover", (event) => {
      let currentOpacity = Number(event.target.style.opacity);
      if (currentOpacity === 0) {
        event.target.style.opacity = 0.1;
      } else if (currentOpacity < 1) {
        event.target.style.opacity = currentOpacity + 0.1;
      }
      if (col === "rainbow") {
        if (rainbowIndex === 7) {
          rainbowIndex = 0;
        }
        event.target.style.backgroundColor = rainbowColors[rainbowIndex++];
      } else event.target.style.backgroundColor = `${col}`;
    });
    box.appendChild(cell);
  }
}

const auto = document.querySelector("#auto");

auto.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    let currentOpacity = Number(cell.style.opacity);
    if (currentOpacity === 0) {
      cell.style.opacity = 0.1;
    } else if (currentOpacity < 1) {
      cell.style.opacity = currentOpacity + 0.1;
    }
    if (col === "rainbow") {
      if (rainbowIndex === 7) {
        rainbowIndex = 0;
      }
      cell.style.backgroundColor = rainbowColors[rainbowIndex++];
    } else cell.style.backgroundColor = `${col}`;
  });
});

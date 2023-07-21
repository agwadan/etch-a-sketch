/* GLOBAL VARIABLES */
var container;

/* Function to create the grid */
const createGrid = (num) => {

  if (!container) {
    console.error("Container is not defined. Make sure to initialize the page first.");
    return;
}

  container.innerHTML = '';
  
  /* Creating the number of rows passed into the function */
  for (let i = 0; i < num; i++) {
    var row = document.createElement("div");
    row.className = "row";

    /* Loop to create 16 squares inside each row */
    for (let j = 0; j < num; j++) {
      let square = document.createElement("div");
      square.className = "square";
      square.addEventListener("mouseover", function () {
        square.classList.add("hovered");
      })
      row.appendChild(square);
    }

    container.appendChild(row);
  }
  return container; 
}

const createButton = () => {
  var button = document.createElement("button");
    button.id = "btn";
  button.textContent = "Enter the number of pixels you want per row & column";
  return button;
}

const handleButtonClick = () => {
  var userInput = prompt("Enter the number of squares on each side (e.g., 16 for a 16x16 grid):");
  var gridSize = parseInt(userInput);
  if (!isNaN(gridSize) && gridSize > 0) {
      console.log(`The grid size is: ${gridSize}`);
      createGrid(gridSize );
  } else {
      alert("Invalid input. Please enter a positive number.");
  }
}

const initializePage = () => {

  var heading = document.createElement("h1");
  heading.textContent = "Etch A Sketch";
  document.body.appendChild(heading);

  var button = createButton();
  button.addEventListener("click", handleButtonClick);
  document.body.appendChild(button);

  container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  createGrid(4);
}

/* Calling the function to initialize the page */
initializePage();
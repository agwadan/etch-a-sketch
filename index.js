
/* Function to create the grid */
const createGrid = (num) => {

  num = 16;
  console.log(num);
  var container = document.createElement("div");
  container.className = "container";
  /* creating 16 rows */
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

const initializePage = () => {

  var container = document.createElement("div");
  container.id = "container";

  var heading = document.createElement("h1");
  heading.textContent = "Etch A Sketch";
  document.body.appendChild(heading);

  var button = createButton();
  document.body.appendChild(button);

  var grid = createGrid(16);
  document.body.appendChild(grid);
}

/* Calling the function to initialize the page */
initializePage();
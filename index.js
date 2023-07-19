console.log("Hello World");

const createGrid = () => {

  /* Assigning the container from The HTML file */
  var container = document.getElementById("container");

  /* creating 16 rows */
  for (let i = 0; i < 16; i++) {
    var row = document.createElement("div");
    row.className = "row";

    /* Loop to create 16 squares inside each row */
    for (let j = 0; j < 16; j++) {
      var square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
    }
    
    container.appendChild(row);
  }
  
}

createGrid();
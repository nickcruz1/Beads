let reset = () => {
  let desktop = document.querySelector(".desktop");
  let canvas = document.querySelector("#canvas");
  let container = document.querySelector(".container-fluid");
  
  canvas.style.border = "";
  canvas.style.backgroundColor = "";
  container.style.border = "";
}

let white = () => {
  console.log("White Bead Clicked");
  let canvas = document.querySelector("#canvas");
  let container = document.querySelector(".container-fluid");
  
  canvas.style.border = "20px solid black";
  canvas.style.backgroundColor = "white";
  container.style.border = "2px solid white";
}

let red = () => {
  console.log("Red Bead Clicked");
   let canvas = document.querySelector("#canvas");
   let container = document.querySelector(".container-fluid");
  
  canvas.style.backgroundColor = "red";
  container.style.border = "2px solid red";
}

let blue = () => {
  console.log("Blue Bead Clicked");
   let canvas = document.querySelector("#canvas");
   let container = document.querySelector(".container-fluid");
  
  canvas.style.backgroundColor = "blue";
  container.style.border = "2px solid blue";
}

let green = () => {
  console.log("Green Bead Clicked");
   let canvas = document.querySelector("#canvas");
   let container = document.querySelector(".container-fluid");
  
  canvas.style.backgroundColor = "green";
  container.style.border = "2px solid green";
}

let gray = () => {
  console.log("Gray Bead Clicked");
   let canvas = document.querySelector("#canvas");
   let container = document.querySelector(".container-fluid");
  
  canvas.style.backgroundColor = "gray";
  container.style.border = "2px solid gray";
}

let yellow = () => {
  console.log("Yellow Bead Clicked");
   let canvas = document.querySelector("#canvas");
  
  canvas.style.backgroundColor = "yellow";
}

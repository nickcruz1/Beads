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
  canvas.style.backgroundColor = "red";
}

let blue = () => {
  console.log("Blue Bead Clicked");
   let canvas = document.querySelector("#canvas");
  canvas.style.backgroundColor = "blue";
}

let green = () => {
  console.log("Green Bead Clicked");
   let canvas = document.querySelector("#canvas");
  canvas.style.backgroundColor = "green";
}

let gray = () => {
  console.log("Gray Bead Clicked");
   let canvas = document.querySelector("#canvas");
  canvas.style.backgroundColor = "gray";
}

let yellow = () => {
  console.log("Yellow Bead Clicked");
   let canvas = document.querySelector("#canvas");
  
  canvas.style.backgroundColor = "yellow";
}

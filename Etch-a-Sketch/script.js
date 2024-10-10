const createBox = () => {
    for (let i = 0; i < 256; i++) {
        const cubeSize = 40;
        const cubeBox = document.querySelector(".cubeBox");
    
        cubeBox.style.display = "flex";
        cubeBox.style.flexWrap = "wrap";
        cubeBox.style.width = `${16 * (cubeSize + 2)}px`;
        cubeBox.style.height = `${16 * (cubeSize + 2)}px`;
    
        const cube = document.createElement("div");
        cube.classList.add("grid");
        cube.style.width = `${cubeSize}px`;
        cube.style.height = `${cubeSize}px`;
        cube.style.border = '1px solid black';
    
        cubeBox.appendChild(cube)
    }
    gridHover()
}

createBox();

function gridHover(){
    let cubeBox = document.querySelectorAll(".grid");
    cubeBox.forEach((item) => {
     item.addEventListener("mouseenter", (e) =>{
       item.style.backgroundColor = "black";
     });
     });
 };

const btnDelete = document.getElementById("delete")

btnDelete.addEventListener("click", () => {
    const cubeBox = document.querySelectorAll(".grid");
    cubeBox.forEach((item) => {
        item.style.backgroundColor = "white";
    });
 })


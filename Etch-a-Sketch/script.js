const createBox = () => {
    for (let i = 0; i < 256; i++) {
        const cubeSize = 40;
        const cubeBox = document.querySelector(".cubeBox");
    
        cubeBox.style.display = "flex";
        cubeBox.style.flexWrap = "wrap";
        cubeBox.style.width = "640px";
        cubeBox.style.height = "640px";
    
        const cube = document.createElement("div");
        cube.classList.add("grid");
        cube.style.width = `${cubeSize}px`;
        cube.style.height = `${cubeSize}px`;
    
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

const btnDelete = document.getElementById("delete");

btnDelete.addEventListener("click", () => {
    const cubeBox = document.querySelectorAll(".grid");
    cubeBox.forEach((item) => {
        item.style.backgroundColor = "white";
    });
 })

const btnNewGrid = document.getElementById("newGrid");

btnNewGrid.addEventListener("click", () => {
    let gridSize = prompt("Enter size from 2 to 100");
    gridSize = parseInt(gridSize);

    const gridCreation = () => {
        const cubeBox = document.querySelector(".cubeBox");
        while(cubeBox.firstChild) {
            cubeBox.removeChild(cubeBox.firstChild);
        }

        cubeBox.style.width = "640px";
        cubeBox.style.height = "640px";

        const cubeHeight = 640/gridSize;
        const cubeWidth = 640/gridSize;
        if (gridSize > 2 && gridSize <= 100) {
            for (let i = 0; i < (gridSize * gridSize); i++) {
        
                const cube = document.createElement("div");
                cube.classList.add("grid");
                cube.style.width = `${cubeWidth}px`;
                cube.style.height = `${cubeHeight}px`;
            
                cubeBox.appendChild(cube)
            }
        } else {
            alert("Too big!")
            createBox();
        }
        
    }
    gridCreation();
    gridHover()
});
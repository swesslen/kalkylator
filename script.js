function createMain() {
    const main = document.createElement("main");
    const body = document.querySelector("body");
    body.appendChild(main);
    body.style.display = "flex"
    body.style.justifyContent = "center"
    main.style.width = "30vw"
    main.style.backgroundColor = "lightgray";
    return main;
}
const main = createMain()

function createDisplay(main) {
    let display = document.createElement("div");
    main.appendChild(display);
    
    display.style.margin = "10px";
    display.style.backgroundColor = "black";
    display.style.color = "white"
    display.style.height = "50px"
    display.style.borderRadius = "10px"
    display.style.display = "flex"
    display.style.justifyContent = "end"
    display.style.alignItems = "end"
    display.style.fontSize = "25px"
    display.style.overflow = "hidden"

    return display;
}
let display = createDisplay(main)

function clearDisplay() {
    display.innerHTML = ``
}

const buttonMatrix = [
    ["C", "(", ")", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["?", "0", ".", "="],
]

function calculate() {
    display.innerHTML = eval(display.innerHTML)
}

function buttonClicked(text) {
    if (text === "C") {
        clearDisplay()
    } else if (text === "=") {
        calculate()
    } else {
        display.innerHTML += text;
    }
}

function createButtons(main) {
    let buttonGrid = document.createElement("div");
    main.appendChild(buttonGrid);
    buttonGrid.style.display = "grid";
    buttonGrid.style.gridTemplateColumns = "repeat(4, 1fr)"
    buttonGrid.style.gridTemplateRows = "repeat(5, 1fr)"
    buttonGrid.style.gap = "5px"
    buttonGrid.style.margin = "10px"

    for(let buttonArray of buttonMatrix) {
        // console.log(buttonArray);
        
        for(let item of buttonArray) {
            // console.log(item)
            let button = document.createElement("button")
            buttonGrid.appendChild(button);
            button.innerHTML = item;
            button.style.border = "none"
            button.style.borderRadius = "5px"
            button.style.cursor = "pointer"

            button.setAttribute(`onclick`, `buttonClicked("${item}")`)

            //button.onclick = buttonClicked(item)

            
            //button.addEventListener("click", buttonClicked(item))
        }
    }
}
createButtons(main)

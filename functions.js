function oddAndEven() {
    let data = document.createElement("div");
    let data2 = document.createElement("div");
    data.className = "div1";
    data2.className = "div2";
    let newElementRed = document.body.appendChild(data);
    let newElementBlue = document.body.appendChild(data2);
}

function color() {
    let color = document.getElementById("colorText").value;
    document.body.style.backgroundColor = color;
}


let processor = document.getElementById("button");
processor.addEventListener("click", oddAndEven);

let backgroundColorChanger = document.getElementById("colorButton");
backgroundColorChanger.addEventListener("click", color);
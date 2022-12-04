function oddAndEven() {
    let sentence = document.getElementById("input").value;
    let splitSentence = sentence.split(" ");
    console.log(splitSentence);
    let newElement = document.createElement("div");
    let newContent = document.createTextNode(splitSentence);
    newElement.appendChild(newContent);
    document.body.appendChild(newElement);

}

function color() {
    let color = document.getElementById("colorText").value;
    document.body.style.backgroundColor = color;
}


let processor = document.getElementById("button");
processor.addEventListener("click", oddAndEven);

let backgroundColorChanger = document.getElementById("colorButton");
backgroundColorChanger.addEventListener("click", color);
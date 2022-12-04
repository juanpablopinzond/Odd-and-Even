function oddAndEven() {
    let sentence = document.getElementById("input").value;
    let splitSentence = sentence.split(" ").join();
    console.log(splitSentence);
    let newElement = document.createElement("div");
    let newContent = document.createTextNode(splitSentence);
    newElement.appendChild(newContent);
    let data = document.body.appendChild(newElement).toString();

}

// function reset() {

// }

let processor = document.getElementById("button");
processor.addEventListener("click", oddAndEven);

// let reseter = document.getElementById("reset");
// reseter.addEventListener("click", reset);

function color() {
    let color = document.getElementById("colorText").value;
    document.body.style.backgroundColor = color;
}

let backgroundColorChanger = document.getElementById("colorButton");
backgroundColorChanger.addEventListener("click", color);
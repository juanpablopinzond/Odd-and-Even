function oddAndEven() {
    let sentence = document.getElementById("input").value;
    let splitSentence = sentence.split(" ");
    console.log(splitSentence);
    let coloredwords = [];
    for (let i = 0; i < splitSentence.length; i++) {
        let newElement = document.createElement("div");
        let newContent = document.createTextNode(splitSentence);
        newElement.appendChild(newContent);
        let data = document.body.appendChild(newElement);
        data.innerHTML = (splitSentence[i]);
        if (i % 2 === 0) {
            newElement.className = "red";
            `<span style=".red">` + splitSentence + `</span>`;
        } else {
            newElement.className = "blue";
            `<span style=".blue">` + splitSentence + `</span>`;
        }
    }
}

function reset() {
    let erase = document.querySelectorAll("red, blue").innerHTML = " ";
}

function color() {
    let color = document.getElementById("colorText").value;
    document.body.style.backgroundColor = color;
}

let processor = document.getElementById("button");
processor.addEventListener("click", oddAndEven);

let reseter = document.getElementById("reset");
reseter.addEventListener("click", reset);

let backgroundColorChanger = document.getElementById("colorButton");
backgroundColorChanger.addEventListener("click", color);
let textArea = document.getElementById('evaluatedText');
textArea.addEventListener("keyup", () => {
    let textAreaValue = textArea.value;
    // textAreaValue = textAreaValue.replace("  ", " ");
    textAreaValue = textAreaValue.replace(/\s{2,}/g, " ");
    let arrayString = textAreaValue.trim().split(" ");
    console.log(textAreaValue)
    if (textAreaValue == '') {
        document.getElementById('wordCount').innerText = 0;
    } else
        document.getElementById('wordCount').innerText = arrayString.length
});


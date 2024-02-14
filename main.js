function process(action) {
    const inputText = document.getElementById('texto').value;
    let result;

    if (action === 'encrypt') {
        result = encrypt(inputText);
    } else if (action === 'decrypt') {
        result = decrypt(inputText);
    }

    document.getElementById('resultText').value = result;
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
}

function clearText() {
    document.getElementById("texto").value = "";
    document.getElementById("resultText").value = "";
}
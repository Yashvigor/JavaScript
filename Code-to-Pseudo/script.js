function convertCode() {
    let code = document.getElementById("codeInput").value;
    let lines = code.split("\n");
    let pseudo = [];

    for (let line of lines) {
        line = line.trim();

        if (line.match(/^if\s*\(.*\)/)) {
            pseudo.push("IF condition THEN");
        } else if (line.match(/^else if\s*\(.*\)/)) {
            pseudo.push("ELSE IF condition THEN");
        } else if (line.match(/^else\s*{/)) {
            pseudo.push("ELSE");
        } else if (line.match(/^for\s*\(.*\)/)) {
            pseudo.push("FOR each item in range DO");
        } else if (line.match(/^while\s*\(.*\)/)) {
            pseudo.push("WHILE condition DO");
        } else if (line.match(/^(int|void|float|double|string)\s+\w+\s*\(.*\)/)) {
            pseudo.push("DEFINE function");
        } else if (line.match(/^return\s+/)) {
            pseudo.push("RETURN value");
        } else if (line.match(/(cout|printf|console\.log)/)) {
            pseudo.push("DISPLAY output");
        } else if (line === "{" || line === "}") {
            continue;
        } else {
            pseudo.push("DO: " + line);
        }
    }

    document.getElementById("pseudoOutput").value = pseudo.join("\n");
}

function clearFields() {
    document.getElementById("codeInput").value = "";
    document.getElementById("pseudoOutput").value = "";
}

function copyPseudocode() {
    const output = document.getElementById("pseudoOutput");
    output.select();
    document.execCommand("copy");
    alert("Pseudocode copied to clipboard!");
}

document.getElementById("themeSwitch").addEventListener("change", function () {
    document.body.classList.toggle("dark");
    document.getElementById("themeLabel").textContent = this.checked ? "Dark Mode" : "Light Mode";
});

`use strict`;

const inputText = document.querySelector(`.input--text`);

const btnGenerate = document.querySelector(`.btn--generate`);

const listAll = document.querySelector(`.list--all`);

btnGenerate.addEventListener(`click`, (e) => {
    e.preventDefault;
    let userInputs = inputText.value.trim();

    let htmlClass = userInputs.replace(/ /g, "--");

    let cssClass = htmlClass.padStart(htmlClass.length + 1, ".");

    let jsVariable = inputText.value
        .replace(/(^\w{0})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
        .replace(/ /g, "");

    if (userInputs != "") {
        let forHtml = document.createElement(`p`);

        listAll.appendChild(forHtml);

        forHtml.classList.add(`for--html`);

        forHtml.textContent = `class = "${htmlClass}"`;

        let forCSS = document.createElement(`p`);

        listAll.appendChild(forCSS);

        forCSS.classList.add(`for--css`);

        forCSS.textContent = `${cssClass} {}`;

        let forJS = document.createElement(`p`);

        listAll.appendChild(forJS);

        forJS.classList.add(`for--js`);

        forJS.textContent = `const ${jsVariable} = document.querySelector("${cssClass}")`;
    } else {
        alert(`please type something`);
    }

    inputText.value = "";
});
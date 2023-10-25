// script.js
const contentContainer = document.getElementById("content-container");
const contentInput = document.getElementById("content-input");
const submitButton = document.getElementById("submit-button");
const submissionForm = document.getElementById("submission-form");

submissionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const link = contentInput.value;
    if (link) {
        displayUserContent(link);
        contentInput.value = "";
    }
});

function displayUserContent(link) {
    const contentItem = document.createElement("a");
    contentItem.href = link;
    contentItem.textContent = link;
    contentContainer.appendChild(contentItem);
}

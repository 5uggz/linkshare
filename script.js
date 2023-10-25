// script.js
const photoContainer = document.getElementById("photo-container");
const videoContainer = document.getElementById("video-container");
const linkContainer = document.getElementById("link-container");
const contentInput = document.getElementById("content-input");
const captionInput = document.getElementById("caption-input");
const submitButton = document.getElementById("submit-button");
const submissionForm = document.getElementById("submission-form");

submissionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const content = contentInput.value;
    const caption = captionInput.value;
    if (content) {
        displayUserContent(content, caption);
        contentInput.value = "";
        captionInput.value = "";
    }
});

function displayUserContent(content, caption) {
    const contentItem = document.createElement("div");

    if (content.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        // If it's an image
        const img = document.createElement("img");
        img.src = content;
        contentItem.appendChild(img);
    } else if (content.match(/\.(mp4|ogg|webm)$/) !== null) {
        // If it's a video
        const video = document.createElement("video");
        video.src = content;
        video.controls = true;
        contentItem.appendChild(video);
    } else {
        // If it's a link
        const link = document.createElement("a");
        link.href = content;
        link.textContent = content;
        contentItem.appendChild(link);
    }

    // Add the caption
    const captionDiv = document.createElement("div");
    captionDiv.textContent = caption;
    contentItem.appendChild(captionDiv);

    if (content.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        photoContainer.appendChild(contentItem);
    } else if (content.match(/\.(mp4|ogg|webm)$/) !== null) {
        videoContainer.appendChild(contentItem);
    } else {
        linkContainer.appendChild(contentItem);
    }
}

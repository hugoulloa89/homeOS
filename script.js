// ... Your existing JavaScript code ...

// Pop-up Text Edit Box
const textEditIcon = document.getElementById("text-edit-icon");
const textEditPopup = document.getElementById("text-edit-popup");
const textEditArea = document.getElementById("text-edit-area");
const saveButton = document.getElementById("save-button");

textEditIcon.addEventListener("click", () => {
    textEditArea.value = textEditIcon.querySelector(".icon-label").textContent;
    textEditPopup.style.display = "flex";
});

saveButton.addEventListener("click", () => {
    const editedText = textEditArea.value;
    textEditPopup.style.display = "none";

    // Create a Blob with the edited text
    const blob = new Blob([editedText], { type: "text/plain" });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to download the file
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "edited_text.txt"; // File name

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Click the anchor element to trigger the download
    downloadLink.click();

    // Remove the temporary anchor element
    document.body.removeChild(downloadLink);
});

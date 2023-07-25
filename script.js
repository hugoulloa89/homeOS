// ... Your existing JavaScript code ...

// Pop-up Text Edit Box
const textEditIcon = document.getElementById("text-edit-icon");
const textEditPopup = document.getElementById("text-edit-popup");
const textEditArea = document.getElementById("text-edit-area");
const saveButton = document.getElementById("save-button");
const closeEditButton = document.getElementById("close-edit-button")

textEditIcon.addEventListener("click", () => {
    textEditArea.value = textEditIcon.querySelector(".icon-label").textContent;
    textEditPopup.style.display = "flex";
});


closeEditButton.addEventListener("click", () => {
textEditPopup.style.display = "none";   
})

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

// Pop-up Contact Form
const contactIcon = document.getElementById("contact-icon");
const contactPopup = document.getElementById("contact-popup");
const closeContactButton = document.getElementById("close-contact-button");

contactIcon.addEventListener("click", () => {
    contactPopup.style.display = "flex";
});

closeContactButton.addEventListener("click", () => {
    contactPopup.style.display = "none";
});

// Handle form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Fetch the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Do something with the form data (e.g., send it via email, save it to a database, etc.)

    // For this example, let's just display an alert with the submitted data
    const submittedData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert("Contact form submitted!\n\n" + submittedData);

    // Clear the form fields
    contactForm.reset();

    // Close the contact form popup
    contactPopup.style.display = "none";
});

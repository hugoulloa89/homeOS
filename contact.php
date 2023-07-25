<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up email parameters
    $to = "ulloaram@gmail.com; // Replace with your email address
    $subject = "Contact Form Submission";
    $headers = "From: $email";

    // Compose the email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        // Email sent successfully
        echo "success";
    } else {
        // Email sending failed
        echo "error";
    }
}
?>

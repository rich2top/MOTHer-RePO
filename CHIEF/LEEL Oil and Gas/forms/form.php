#<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your email address
    $to_email = "your@email.com";

    // Subject of the email
    $subject = "New Form Submission";

    // Collect form data
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    // Compose the email message
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send email
    if (mail($to_email, $subject, $message_body, $headers)) {
        echo "OK";
    } else {
        echo "Error: Unable to send email.";
    }
} else {
    echo "Error: Invalid request method.";
}

// Function to sanitize form input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
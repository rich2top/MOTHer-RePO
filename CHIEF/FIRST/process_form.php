<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize user input
    function sanitizeInput($input) {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }

    // Collect and sanitize form data
    $first_name = sanitizeInput($_POST["first-name"]);
    $last_name = sanitizeInput($_POST["last-name"]);
    $email = sanitizeInput($_POST["email"]);
    $subject = sanitizeInput($_POST["subject"]);
    $message = sanitizeInput($_POST["message"]);

    // Set recipient email address (change to your email)
    $to_email = "your-email@example.com";

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Create email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Compose the email message
    $email_message = "
        <html>
        <body>
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $first_name $last_name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        </body>
        </html>
    ";

    // Send the email
    if (mail($to_email, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Thank you for contacting us. Your message is currently being reviewed.";
    } else {
        // Email sending failed
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    // Invalid request method
    echo "Invalid request method. Please use the contact form to submit your message.";
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

    if ($email) {
        $file = 'subscribers.txt';
        
        // Open the file in append mode
        $handle = fopen($file, 'a');

        if ($handle) {
            // Append the email to the file
            fwrite($handle, $email . "\n");
            fclose($handle);
            echo 'Thank you for subscribing!';
        } else {
            echo 'Failed to open the file for writing.';
        }
    } else {
        echo 'Invalid email address. Please enter a valid email.';
    }
} else {
    echo 'Invalid request.';
}
?>

<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Extract form fields
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $message = $data['message'] ?? '';
    $service = $data['service'] ?? '';

    // Prepare email content
    $to = 'ganesh.nh98@gmail.com';
    $subject = 'New Consultation Request from ' . $name;
    
    $emailContent = "New consultation request received:\n\n";
    $emailContent .= "Name: " . $name . "\n";
    $emailContent .= "Email: " . $email . "\n";
    $emailContent .= "Phone: " . $phone . "\n";
    $emailContent .= "Service: " . $service . "\n\n";
    $emailContent .= "Message:\n" . $message;
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    $mailSent = mail($to, $subject, $emailContent, $headers);

    if ($mailSent) {
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message. We will contact you soon!'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Sorry, there was an error sending your message. Please try again later.'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?> 
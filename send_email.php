<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['name']) || empty($data['phone']) || empty($data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$phone = htmlspecialchars($data['phone']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = isset($data['message']) ? htmlspecialchars($data['message']) : '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email content
$emailContent = "New consultation request received:\n\n";
$emailContent .= "Name: $name\n";
$emailContent .= "Phone: $phone\n";
$emailContent .= "Email: $email\n";
$emailContent .= "Message: $message\n";

// Use GoDaddy's SMTP server
$to = "support@ensembledigilabs.com";
$subject = "New Consultation Request from $name";
$headers = "From: noreply@cbsurgery.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Log the attempt
error_log("Attempting to send email to: $to from: $email");

// Use GoDaddy's mail server
ini_set("SMTP", "relay-hosting.secureserver.net");
ini_set("smtp_port", "25");
ini_set("sendmail_from", "noreply@cbsurgery.com");

// Send email
$mailSent = mail($to, $subject, $emailContent, $headers);

if ($mailSent) {
    error_log("Email sent successfully to: $to");
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your request! We will contact you shortly.'
    ]);
} else {
    $error = error_get_last();
    error_log("Failed to send email to: $to. Error: " . ($error ? $error['message'] : 'Unknown error'));
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email. Please try again later.',
        'debug' => $error ? $error['message'] : 'Unknown error'
    ]);
}
?> 
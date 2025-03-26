<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

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

// Email settings
$to = "support@ensembledigilabs.com";
$subject = "New Consultation Request from $name";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Email content
$emailContent = "New consultation request received:\n\n";
$emailContent .= "Name: $name\n";
$emailContent .= "Phone: $phone\n";
$emailContent .= "Email: $email\n";
$emailContent .= "Message: $message\n";

// Send email
$mailSent = mail($to, $subject, $emailContent, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your request! We will contact you shortly.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email. Please try again later.'
    ]);
}
?> 
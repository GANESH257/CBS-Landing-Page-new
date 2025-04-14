<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Get raw POST data
    $rawData = file_get_contents('php://input');
    
    // Log the raw data for debugging
    error_log("Received data: " . $rawData);
    
    // Decode JSON data
    $data = json_decode($rawData, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("JSON decode error: " . json_last_error_msg());
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }

    // Log decoded data
    error_log("Decoded data: " . print_r($data, true));

    // Validate required fields
    $missingFields = [];
    if (empty($data['name'])) $missingFields[] = 'name';
    if (empty($data['phone'])) $missingFields[] = 'phone';
    if (empty($data['email'])) $missingFields[] = 'email';

    if (!empty($missingFields)) {
        error_log("Missing required fields: " . implode(', ', $missingFields));
        throw new Exception('Missing required fields: ' . implode(', ', $missingFields));
    }

    // Sanitize inputs
    $name = htmlspecialchars($data['name']);
    $phone = htmlspecialchars($data['phone']);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $message = isset($data['message']) ? htmlspecialchars($data['message']) : '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        error_log("Invalid email format: " . $email);
        throw new Exception('Invalid email format');
    }

    // Email settings
    $to = "support@ensembledigilabs.com";
    $subject = "New Consultation Request from $name";
    
    // Build email headers
    $headers = array(
        'From' => $email,
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion(),
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8'
    );

    // Format email content
    $emailContent = "New consultation request received:\n\n";
    $emailContent .= "Name: $name\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message: $message\n";

    // Log email attempt
    error_log("Attempting to send email to: " . $to);
    error_log("Email content: " . $emailContent);

    // Send email
    $mailSent = mail($to, $subject, $emailContent, $headers);

    if ($mailSent) {
        error_log("Email sent successfully");
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your request! We will contact you shortly.'
        ]);
    } else {
        error_log("Failed to send email");
        throw new Exception('Failed to send email. Please check server configuration.');
    }
} catch (Exception $e) {
    error_log("Error in send_email.php: " . $e->getMessage());
    error_log("Stack trace: " . $e->getTraceAsString());
    http_response_code(500);
    echo json_encode([
        'error' => $e->getMessage()
    ]);
}
?> 
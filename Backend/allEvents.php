<?php
header('Content-Type: application/json');
session_start();
require_once 'db.php';
$db = new Database();
$conn = $db->getConnection();

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}
$sql = "SELECT 
    u.Fname,  
    b.EventImage,
    b.EventMessage,
    b.EventDate,
    b.EventTime,
    b.Topic
    FROM Event b 
    INNER JOIN Researcher u ON b.ResearcherId = u.ResearcherId";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die(json_encode(["error" => "SQL preparation failed: " . $conn->error]));
}
$stmt->execute();
$result = $stmt->get_result();

$response = [];

if ($result->num_rows === 0) {
    $response = ["message" => "No Event found"];
} else {
    $response = $result->fetch_all(MYSQLI_ASSOC);
}

echo json_encode($response);

$stmt->close();
$conn->close();

<?php
session_start();
require_once 'db.php';
$db = new Database();
$conn = $db->getConnection();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Fname = $_POST["username"];
    $password = $_POST["password"];
    $stmt = $conn->prepare("SELECT * FROM Researcher WHERE Fname=?");
    $stmt->bind_param("s", $Fname);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();
    if ($user && password_verify($password, $user["hashedPasswod"])) {
        $_SESSION['ResearcherId'] = $user['ResearcherId'];
        $_SESSION['Fname'] = $user['Fname'];
        echo json_encode(["loggedIn" => "LoggedIn"]);
    } else {
        echo json_encode(["incorrect" => "Invalid User"]);
        header('Location: ../Pages/adminLogin.html');
    }
}

$conn->close();

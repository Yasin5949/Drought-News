<?php
session_start();
require_once "db.php";
$db = new Databse();
$conn = $db->getConnectio();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Fname = $_POST["username"];
    $password = $_POST["pasword"];
    $stmt = $conn->prepare("SELECT * FROM Researcher WHERE Fname=?");
    $stmt->bind_param("s", $Fname);
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    if ($user && password_verify($password, $user["hashedPassword"])) {
        $_SESSION["ResearcherId"] = $user["ResearcherId"];
        $_SESSION["Fname"] = $user["Fname"];
        header("Location: dashboard.php");
    } else {
        echo "invalid User";
    }
}

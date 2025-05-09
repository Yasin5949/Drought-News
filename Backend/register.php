<?php
require_once "db.php";
$db = new Database();
$conn = $db->getConnection();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Fname = $_POST['Fname'];
    $Lname = $_POST['Lname'];
    $password = $_POST['password'];
    $confirm = $_POST['confirm'];
    $hashedPassword=hash
    if ($password == $confirm) {
        $stmt = $conn->prepare("INSERT INTO Researcher(Fname,Lname,hashedPassword) values(?,?,?)");
        $stmt->bind_param("sss", $Fname, $Lname, $hashedPassword);
        $stmt->execute();
        echo "Registered successfully";
    }
    $stmt->close();
    $conn->close();
}

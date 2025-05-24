<?php
require_once 'db.php';
$db = new Database();
$conn = $db->getConnection();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Fname = $_POST['Fname'];
    $Lname = $_POST['Lname'];
    $password = $_POST['password'];
    $confirm = $_POST['confirm'];
    if ($password == $confirm) {
        $hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO Researcher(Fname,Lname,hashedPasswod) values(?,?,?)");
        $stmt->bind_param("sss", $Fname, $Lname, $hashedPassword);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        header('Location: ../Pages/adminLogin.html');
        echo "Registered successfully";
    } else {
        echo "password don't match";
    }
}

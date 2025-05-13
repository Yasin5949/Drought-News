<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "droughtdb";
$conn = new mysqli($host, $username, $password, $database);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Fname = $_POST['Fname'];
    $Lname = $_POST['Lname'];
    $password = $_POST['password'];
    $confirm = $_POST['confirm'];
    $hashedPassword = Password_hash($_POST['password'], PASSWORD_DEFAULT);
    if ($password == $confirm) {
        $stmt = $conn->prepare("INSERT INTO Researcher(Fname,Lname,hashedPassword) values(?,?,?)");
        $stmt->bind_param("sss", $Fname, $Lname, $hashedPassword);
        $stmt->execute();
        echo "Registered successfully";
        header('Location: ../Pages/adminLogin.html');
    }
    $stmt->close();
    $conn->close();
}

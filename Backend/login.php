<?php
session_start();
$host = "localhost";
$username = "root";
$password = "";
$database = "droughtdb";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Fname = $_POST["username"];
    $password = $_POST["password"];

    // Prepare the statement
    $stmt = $conn->prepare("SELECT * FROM Researcher WHERE Fname=?");
    $stmt->bind_param("s", $Fname);

    // Execute the statement
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Close the statement
    $stmt->close();

    if ($user && password_verify($password, $user["hashedPassword"])) {
        $_SESSION['ResearcherID'] = $user['ResearcherID'];
        $_SESSION['Fname'] = $user['Fname'];
        echo "User Logged In";

        // Redirect to admin page
        header('Location: ../Pages/adminPage.html');
        exit(); // Ensure script stops after redirection
    } else {
        echo "Invalid User";
        header('Location: ../Pages/adminLogin.html');
    }
}

// Close the connection
$conn->close();

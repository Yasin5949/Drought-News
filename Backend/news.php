<?php
session_start();
require_once 'db.php';
$db = new Database();
$conn = $db->getConnection();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Reason = $_POST['newsMessage'];
    $NewsPoster = $_SESSION['ResearcherId'];
    if (!isset($_FILES["newsImage"]) || $_FILES["newsImage"]["error"] != 0) {
        die("Error: No file uploaded or upload failed.");
    }
    $images = "C:/xampp/htdocs/Drought-News/newsImage/";
    $imageName = basename($_FILES["newsImage"]["name"]);
    $targetImage = $images . $imageName;
    $imageFileType = strtolower(pathinfo($imageName, PATHINFO_EXTENSION));

    $check = getimagesize($_FILES["newsImage"]["tmp_name"]);
    if ($check === false) {
        die("File is not image.");
    }

    if (move_uploaded_file($_FILES["newsImage"]["tmp_name"], $targetImage)) {
        $relativePath = "newsImage/" . $imageName;
        $stmt = $conn->prepare("INSERT INTO News(NewsImage,NewsMessage,ResearcherID) values(?,?,?)");
        $stmt->bind_param("ssi", $relativePath, $Reason, $NewsPoster);
        if ($stmt->execute()) {
            echo json_encode(["posted" => "News Posted"]);
        } else {
            echo json_encode(["notPosted" => "News Not Posted"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["noImage" => "No Image Uploaded"]);
    }
}
$conn->close();

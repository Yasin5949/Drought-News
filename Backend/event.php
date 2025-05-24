<?php
session_start();
require_once 'db.php';
$db = new Database();
$conn = $db->getConnection();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Reason = $_POST['eventMessage'];
    $eventHost = $_SESSION['ResearcherId'];
    $EventDate = $_POST['EventDate'];
    $EventTime = $_POST['EventTime'];
    $Topic = $_POST['topic'];
    if (!isset($_FILES["eventImage"]) || $_FILES["eventImage"]["error"] != 0) {
        die("Error: No file uploaded or upload failed.");
    }
    $images = "C:/xampp/htdocs/Drought-News/eventImage/";
    $imageName = basename($_FILES["eventImage"]["name"]);
    $targetImage = $images . $imageName;
    $imageFileType = strtolower(pathinfo($imageName, PATHINFO_EXTENSION));

    $check = getimagesize($_FILES["eventImage"]["tmp_name"]);
    if ($check === false) {
        die("File is not image.");
    }

    if (move_uploaded_file($_FILES["eventImage"]["tmp_name"], $targetImage)) {
        $relativePath = "eventImage/" . $imageName;
        $stmt = $conn->prepare("INSERT INTO Event(EventMessage,EventImage,ResearcherId,EventDate,EventTime,Topic) values(?,?,?,?,?,?)");
        $stmt->bind_param("ssssss", $Reason, $relativePath, $eventHost, $EventDate, $EventTime, $Topic);
        if ($stmt->execute()) {
            echo json_encode(["posted" => "Event Posted"]);
        } else {
            echo json_encode(["notPosted" => "Event Not Posted"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["noImage" => "no Event Image Is Posted"]);
    }
}
$conn->close();

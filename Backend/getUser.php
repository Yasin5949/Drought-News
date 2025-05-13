<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['Fname'])) {
    echo json_encode(["Fname" => $_SESSION['Fname']]);
} else {
    echo json_encode(["error" => "Not logged in"]);
}

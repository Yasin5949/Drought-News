<?php
if (!isset($_SESSION["ResearcherId"])) {
    header("Location: login.html");
    exit();
} else {
    header("Location: Home.html");
}

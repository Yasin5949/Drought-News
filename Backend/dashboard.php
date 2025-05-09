<?php
if (!isset($_SESSION["ResearcherId"])) {
    header("Location: login.html");
} else {
    header("Location: Home.html");
}

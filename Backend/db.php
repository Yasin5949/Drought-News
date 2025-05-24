<?php
class Database
{
    private $host = "localhost";
    private $username = "root";
    private $password = "Ya5in@astu##";
    private $database = "DroughtDB";
    private $conn;
    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->database);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }
    public function getConnection()
    {
        return $this->conn;
    }
}

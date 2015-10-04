<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email    = $_POST["email"];
    $password = $_POST["password"];
} //hashing and salting passwords 
$salt           = "danielprilikdahuehue";
$hashpassword   = crypt($password, $salt);
$servername     = "localhost";
$serverusername = "cl40-dismahjam";
$serverpassword = "jammeupscotty";
$database       = "cl40-dismahjam"; 

// Create connection 
$conn           = new mysqli($servername, $serverusername, $serverpassword, $database);
$data           = "SELECT email, password FROM Profiles";
$result         = $conn->query($data);
if ($result->num_rows > 0) { // output data of each row
    while ($row = $result->fetch_assoc()) {
        if ($row["password"] === $hashpassword && $row["email"] === $email) {
            $_SESSION['email']        = $row["email"];
            $_SESSION['name']         = $row["name"];
            $_SESSION['lastactivity'] = time();
            echo 1;
            die();
        }
    }
    echo 2;
} else {
    echo 0;
}
?> 
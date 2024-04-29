<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kampung-rasa-db";

$connect = mysqli_connect($host, $user, $pass, $db);

#status koneksi
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
?>
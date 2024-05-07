<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header('Access-Control-Allow-Headers: Content-Type, Authorization');


$host = "localhost"; // Host database (biasanya "localhost" untuk server lokal)
$user = "root"; // Nama pengguna database
$pass = ""; // Kata sandi database (kosong jika tidak ada)
$db   = "kampung_rasa_db"; // Nama database

$connect = mysqli_connect($host, $user, $pass, $db);

# Periksa status koneksi
if (mysqli_connect_error()) {
    echo mysqli_connect_error(); // Tampilkan pesan kesalahan jika koneksi gagal
    exit(); // Hentikan eksekusi skrip
}
?>

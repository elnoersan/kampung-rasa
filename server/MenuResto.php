<?php
header('Content-Type: application/json');



include 'koneksi.php'; // Sertakan file koneksi.php untuk menghubungkan ke database

$query = 'SELECT idMenu, namaMenu, harga, gambar, idKategoriMenu, idStaf FROM menu'; // Query SQL untuk mengambil data dari database
$result = $connect->query($query); // Eksekusi query

$data = array(); // Inisialisasi array untuk menyimpan data

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row; // Tambahkan setiap baris data ke dalam array $data
    }
}

echo json_encode($data); // Keluarkan data dalam format JSON

$connect->close(); // Tutup koneksi database
?>

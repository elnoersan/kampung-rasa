<?php
header('Content-Type: application/json');

include 'koneksi.php'; // Sertakan file koneksi.php untuk menghubungkan ke database

// Tangani permintaan POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Ambil data dari request
    $data = json_decode(file_get_contents("php://input"));

    // Periksa apakah data yang diterima valid
    if (empty($data->namaCustomer) || empty($data->kontakCustomer) || empty($data->pesanan) || empty($data->waktuPesanan)) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "Data customer, pesanan, atau waktu pesanan tidak lengkap."));
        exit(); // Keluar dari skrip
    }

    // Simpan data customer
    $idCustomer = uniqid(); // Buat ID customer baru
    $namaCustomer = mysqli_real_escape_string($koneksi, $data->namaCustomer);
    $kontakCustomer = mysqli_real_escape_string($koneksi, $data->kontakCustomer);

    // Tambahkan logika untuk menyimpan data customer ke tabel customer
    $queryInsertCustomer = "INSERT INTO customer (idCustomer, namaCustomer, kontakCustomer) VALUES ('$idCustomer', '$namaCustomer', '$kontakCustomer')";
    $resultInsertCustomer = mysqli_query($koneksi, $queryInsertCustomer);

    if ($resultInsertCustomer) {
        // Simpan pesanan untuk setiap menu yang dipilih
        foreach ($data->pesanan as $pesanan) {
            $idMenu = $pesanan->idMenu;
            $quantity = $pesanan->quantity;
            $waktuPesanan = $data->waktuPesanan;

            // Tambahkan logika untuk menyimpan pesanan ke tabel pesanan
            $queryInsertPesanan = "INSERT INTO pesanan (idCustomer, idMenu, quantity, waktuPesanan) VALUES ('$idCustomer', '$idMenu', '$quantity', '$waktuPesanan')";
            $resultInsertPesanan = mysqli_query($koneksi, $queryInsertPesanan);

            // Periksa apakah penyimpanan pesanan berhasil
            if (!$resultInsertPesanan) {
                // Jika gagal menyimpan pesanan
                http_response_code(500); // Internal Server Error
                echo json_encode(array("error" => "Gagal menyimpan pesanan."));
                exit(); // Keluar dari skrip
            }
        }

        // Kirim respon ke client jika semuanya berhasil
        echo json_encode(array("message" => "Data customer dan pesanan berhasil disimpan.", "idCustomer" => $idCustomer));
        exit(); // Keluar dari skrip
    } else {
        // Jika gagal menyimpan data customer
        http_response_code(500); // Internal Server Error
        echo json_encode(array("error" => "Gagal menyimpan data customer."));
        exit(); // Keluar dari skrip
    }
} else {
    // Jika metode permintaan tidak didukung
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("error" => "Metode tidak diizinkan."));
    exit(); // Keluar dari skrip
}
?>

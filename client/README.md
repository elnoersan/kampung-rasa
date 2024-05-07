import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export const TakeWayModal = ({ setShowTakeWay }) => {
const [totalPrice, setTotalPrice] = useState(0);
const [content, setContent] = useState([]);

    const handleCloseTakeWay = () => {
        setShowTakeWay(false);
    }

    const handleCheckout = () => {
        setTotalPrice(0);
        setShowTakeWay(false); // Sembunyikan modal checkout setelah berhasil checkout
        console.log('Checkout successful!');

    };


    useEffect(() => {
        // Ambil data dari server
        axios.get('http://localhost/kampung-rasa/server/MenuResto.php')
            .then(response => {
                // Tambahkan prop 'quantity' dengan nilai awal 0 ke setiap item
                const dataWithQuantity = response.data.map(item => ({ ...item, quantity: 0 }));
                setContent(dataWithQuantity);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        // Hitung total harga berdasarkan kuantitas dan harga setiap item
        const totalPrice = content.reduce((acc, item) => {
            return acc + (item.harga * item.quantity);
        }, 0);

        // Atur total harga
        setTotalPrice(totalPrice);
    }, [content]);

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center z-50 overflow-y-auto p-4">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">TAKEWAY</p>
                        <IconButton onClick={handleCloseTakeWay} className="modal-close cursor-pointer z-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </IconButton>
                    </div>
                    <form>
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder="Name" className="border border-gray-300 rounded-sm p-2" />
                            <input type="text" placeholder="Phone" className="border border-gray-300 rounded-sm p-2" />
                            <input type="time" placeholder="date" className="border border-gray-300 rounded-sm p-2" />
                            <p className="text-2xl font-bold">CHOOSE MENU</p>
                            <p className="text-xl font-bold">PAKET NASI</p>
                            <div className="grid grid-cols-3 gap-2">
                                {content.map((menuContent) => (
                                    <CardMenu
                                        key={menuContent.idMenu}
                                        menuContent={menuContent}
                                        setContent={setContent}
                                        totalPrice={totalPrice}
                                        setTotalPrice={setTotalPrice}
                                    />
                                ))}
                            </div>

                            <p className="text-xl font-bold">MASAKAN LAUT</p>
                            <div className="grid grid-cols-3 gap-2">
                                {content.map((menuContent) => (
                                    <CardMenu
                                        key={menuContent.idMenu}
                                        menuContent={menuContent}
                                        setContent={setContent}
                                        totalPrice={totalPrice}
                                        setTotalPrice={setTotalPrice}
                                    />
                                ))}
                            </div>
                            {/* checkout price */}
                            <div className="flex justify-between mt-24 border border-gray-300 p-2 bg-gray-200 items-center">
                                <p className="text-2xl font-bold  justify-center">Total Price </p>
                                <p className="text-2xl font-bold">Rp. {totalPrice}</p>
                                <button className='px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-sm transition duration-200' onClick={handleCheckout}>CHECKOUT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

function CardMenu({ menuContent, setContent, totalPrice, setTotalPrice }) {
const [quantity, setQuantity] = useState(0); // Tambahkan state quantity di sini

const handleDelete = () => {
if (quantity > 0) {
// Hanya kurangi kuantitas jika ada
setQuantity(quantity === 0);
// Kurangi total harga berdasarkan harga item yang dihapus
setTotalPrice(totalPrice - (menuContent.harga \* quantity));
}
};

    return (
        <div className="border border-gray-300 rounded-sm p-2" id='cardMenu'>
            <img src={menuContent.gambar} alt="" className='rounded-md w-[280px] h-[280px]' />
            <div className="flex gap-2 p-2 items-center justify-center">
                <p className="text-center">{menuContent.namaMenu}</p>
                <p className="text-center">Rp. {menuContent.harga}</p>
            </div>
            <div className="flex items-center justify-center">
                <QuantityButton
                    quantity={quantity}
                    setQuantity={setQuantity}
                    setContent={setContent}
                    menuContent={menuContent}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                />
                <button className="p-1 bg-red-500 text-white rounded" onClick={handleDelete}>
                    <TrashIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );

}

function QuantityButton({ quantity, setQuantity, setContent, menuContent, totalPrice, setTotalPrice }) {
const incrementQuantity = () => {
setQuantity(quantity + 1);
setContent(prevContent => {
return prevContent.map(item => {
if (item.idMenu === menuContent.idMenu) {
return { ...item, quantity: item.quantity + 1 };
}
return item;
});
});
// Tambahkan harga item ke total harga
setTotalPrice(totalPrice + menuContent.menuPrice);
};

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setContent(prevContent => {
                return prevContent.map(item => {
                    if (item.idMenu === menuContent.idMenu) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
            });
            // Kurangi harga item dari total harga
            setTotalPrice(totalPrice - menuContent.menuPrice);
        }
    };

    return (
        <div className="flex items-center space-x-2 mx-auto">
            <button className="p-1" onClick={decrementQuantity}>
                <MinusIcon className="w-6 h-6" />
            </button>
            <span className="text-center">{quantity}</span>
            <button className="p-1" onClick={incrementQuantity}>
                <PlusIcon className="w-6 h-6" />
            </button>
        </div>
    );

}

function ButtonGroup({ quantity, setQuantity }) {
return (

<div className="flex items-center space-x-4 border border-gray-300 rounded-md p-2">
<QuantityButton quantity={quantity} setQuantity={setQuantity} />
</div>
);
}

export default ButtonGroup;

<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


include 'koneksi.php'; // Sertakan file koneksi.php untuk menghubungkan ke database

$query = 'SELECT idTagihan, total FROM tagihan'; // Query SQL untuk mengambil data dari database
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

<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include 'koneksi.php'; // Sertakan file koneksi.php untuk menghubungkan ke database

// Tangani permintaan OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200); // Kode status 200 OK
    exit(); // Keluar dari skrip
}

// Tangani permintaan POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Ambil data total harga dari permintaan POST
    $input = json_decode(file_get_contents('php://input'), true);
    $totalHarga = $input['totalHarga'];

    // Query SQL untuk menambahkan data tagihan
    $query = "INSERT INTO tagihan (total) VALUES ($totalHarga)";

    if ($connect->query($query) === TRUE) {
        // Jika data berhasil ditambahkan, ambil ID tagihan yang baru saja dibuat
        $idTagihan = $connect->insert_id;
        // Buat data tagihan dalam bentuk array
        $data = array('idTagihan' => $idTagihan, 'total' => $totalHarga);
        // Keluarkan data dalam format JSON
        echo json_encode($data);
    } else {
        // Jika terjadi kesalahan, keluarkan pesan kesalahan dalam format JSON
        echo json_encode(array('error' => 'Gagal menambahkan data tagihan: ' . $connect->error));
    }

    // Keluar dari skrip
    exit();
}

// Tutup koneksi database
$connect->close();
?>

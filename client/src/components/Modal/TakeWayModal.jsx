import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { CheckoutModal } from './CheckoutModal';

export const TakeWayModal = ({ setShowTakeWay, totalHarga }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [content, setContent] = useState([]);
    const [groupedContent, setGroupedContent] = useState({}); // State for grouped content
    const [kategoriMenu, setKategoriMenu] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [namaPemesan, setNamaPemesan] = useState('');
    const [telepon, setTelepon] = useState('');
    const [waktuPengambilan, setWaktuPengambilan] = useState('');



    const handleCloseTakeWay = () => {
        setShowTakeWay(false);
    }


    const handleCheckout = () => {
        setShowCheckout(true);

        const data = {
            namaCustomer: namaPemesan,
            kontakCustomer: telepon,
            pesanan: JSON.stringify(content) // Mengonversi array content menjadi string JSON
        };

        axios.post('http://localhost/kampung-rasa/server/HandleDataCustomer.php', data)
            .then(response => {
                console.log(response.data); // Menampilkan respons dari server
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // Reset state
        setNamaPemesan('');
        setTelepon('');
        setWaktuPengambilan('');
        setContent([]);
        setTotalPrice(0);
    };


    useEffect(() => {
        axios.get('http://localhost/kampung-rasa/server/MenuResto.php')
            .then(response => {
                const dataWithQuantity = response.data.map(item => ({ ...item, quantity: 0 }));
                setContent(dataWithQuantity);
                // Group data menu berdasarkan kategori menu
                const groupedContent = dataWithQuantity.reduce((acc, menu) => {
                    acc[menu.idKategoriMenu] = acc[menu.idKategoriMenu] || [];
                    acc[menu.idKategoriMenu].push(menu);
                    return acc;
                }, {});
                setGroupedContent(groupedContent); // Set grouped content
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch menu categories from KategoriMenu.php
        axios.get('http://localhost/kampung-rasa/server/KategoriMenu.php')
            .then(response => {
                setKategoriMenu(response.data); // Set menu categories
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);



    useEffect(() => {
        const totalPrice = content.reduce((acc, item) => {
            return acc + (item.harga * item.quantity);
        }, 0);
        setTotalPrice(totalPrice);
    }, [content]);

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center z-50 overflow-y-auto p-4">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50">
            </div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">Take Away</p>
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
                    <div className="flex flex-col gap-2 mt-4">
                        <input
                            type="text"
                            placeholder="Nama Pemesan"
                            className="border border-gray-300 rounded-sm p-2"
                            value={namaPemesan}
                            onChange={(e) => setNamaPemesan(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Telepon"
                            className="border border-gray-300 rounded-sm p-2"
                            value={telepon}
                            onChange={(e) => setTelepon(e.target.value)}
                        />
                        <label htmlFor="#" className="mt-2 text-sm text-gray-600">
                            Pilih waktu pengambilan agar resto segera menyiapkan pesanan.
                        </label>
                        <input
                            type="time"
                            placeholder="Waktu Pengambilan"
                            className="border border-gray-300 rounded-sm p-2"
                            value={waktuPengambilan}
                            onChange={(e) => setWaktuPengambilan(e.target.value)}
                        />
                    </div>
                    <p className="text-2xl font-bold mt-4">Pilih Menu</p>
                    <form>
                        {kategoriMenu.map(category => (
                            <div key={category.idKategoriMenu}>
                                <p className="text-xl font-bold mt-4 mb-2">*<span></span> {category.kategoriMenu}</p>
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Render menu items for this category */}
                                    {groupedContent[category.idKategoriMenu]?.map((menuContent) => (
                                        <CardMenu
                                            key={menuContent.idMenu}
                                            menuContent={menuContent}
                                            setContent={setContent}
                                            totalPrice={totalPrice}
                                            setTotalPrice={setTotalPrice}
                                        />
                                    ))}
                                </div>

                            </div>
                        ))}
                        <div className="flex justify-between mt-24 border border-gray-300 p-2 bg-gray-200 items-center">
                            <p className="text-2xl font-bold  justify-center">Total Harga </p>
                            <p className="text-2xl font-bold">Rp. {totalPrice}</p>
                            <button className='px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-sm transition duration-200' onClick={handleCheckout}>Checkout</button>

                        </div>
                    </form>
                </div>
                {showCheckout && <CheckoutModal setShowCheckout={setShowCheckout} />}
            </div>
        </div>
    );
}


function CardMenu({ menuContent, setContent, totalPrice, setTotalPrice }) {
    const [quantity, setQuantity] = useState(0);

    const handleDelete = () => {
        if (quantity > 0) {
            setQuantity(0);
            setTotalPrice(totalPrice - (menuContent.harga * quantity));
        }
    };

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
        setTotalPrice(totalPrice + menuContent.harga);
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
            setTotalPrice(totalPrice - menuContent.harga);
        }
    };

    return (
        <div className="border border-gray-300 rounded-sm p-2">
            <img src={menuContent.gambar} alt="" className='rounded-md w-[280px] h-[280px]' />
            <div className="flex gap-2 p-2 items-center justify-center">
                <p className="text-center">{menuContent.namaMenu}</p>
                <p className="text-center">Rp. {menuContent.harga}</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2 mx-auto">
                    <button className="p-1" onClick={decrementQuantity}>
                        <MinusIcon className="w-6 h-6" />
                    </button>
                    <span className="text-center">{quantity}</span>
                    <button className="p-1" onClick={incrementQuantity}>
                        <PlusIcon className="w-6 h-6" />
                    </button>
                </div>
                <button className="p-1 bg-red-500 text-white rounded" onClick={handleDelete}>
                    <TrashIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

export default TakeWayModal;

import React from 'react'
// import { useState } from 'react';
import { IconButton } from '@material-ui/core';

export const CheckoutModal = ({ setShowCheckout }) => {

    const handleCloseCheckout = () => {
        setShowCheckout(false);
    };

    return (
        <>
            <div className="modal fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 px-6">
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">Checkout</p>
                            <IconButton onClick={handleCloseCheckout} className="modal-close cursor-pointer z-50">

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

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex justify-between items-center">
                                <p className="text-lg">Total Harga</p>
                                <p className="text-lg">Rp. 100.000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-lg">Ongkos Kirim</p>
                                <p className="text-lg">Rp. 10.000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-lg">Total Bayar</p>
                                <p className="text-lg">Rp. 110.000</p>
                            </div>

                            <button className="bg-blue-500 text-white py-2 rounded-md">Bayar</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';

export const TakeWayModal = ({ setShowTakeWay }) => {


    const handleCloseTakeWay = () => {
        setShowTakeWay(false);
    }

    const menuName = "Nasi Ayam Goreng";
    const menuPrice = "20K";

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
                    {/* Takeway form */}
                    <form >
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder="Name" className="border border-gray-300 rounded-sm p-2" />
                            <input type="text" placeholder="Phone" className="border border-gray-300 rounded-sm p-2" />
                            <input type="time" placeholder="date" className="border border-gray-300 rounded-sm p-2" />
                            {/* <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-sm">Order</button> */}
                            <p className="text-2xl font-bold">CHOOSE MENU</p>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border border-gray-300 rounded-sm p-2">
                                    <img src="/assets/1. Ayam Goreng (20K).jpg" alt="" className='rounded-md' />
                                    <div className="flex gap-2 p-2 items-center justify-center">
                                        <p className="text-center">{menuName}</p>
                                        <p className="text-center">{menuPrice}</p>
                                    </div>
                                    <ButtonGroup />
                                </div>
                                <div className="border border-gray-300 rounded-sm p-2">
                                    <img src="/assets/1. Ayam Goreng (20K).jpg" alt="" className='rounded-md' />
                                    <div className="flex gap-2 p-2 items-center justify-center">
                                        <p className="text-center">{menuName}</p>
                                        <p className="text-center">{menuPrice}</p>
                                    </div>
                                    <ButtonGroup />
                                </div>
                                <div className="border border-gray-300 rounded-sm p-2">
                                    <img src="/assets/1. Ayam Goreng (20K).jpg" alt="" className='rounded-md' />
                                    <div className="flex gap-2 p-2 items-center justify-center">
                                        <p className="text-center">{menuName}</p>
                                        <p className="text-center">{menuPrice}</p>
                                    </div>
                                    <ButtonGroup />
                                </div>
                                <div className="border border-gray-300 rounded-sm p-2">
                                    <img src="/assets/1. Ayam Goreng (20K).jpg" alt="" className='rounded-md' />
                                    <div className="flex gap-2 p-2 items-center justify-center">
                                        <p className="text-center">{menuName}</p>
                                        <p className="text-center">{menuPrice}</p>
                                    </div>
                                    <ButtonGroup />
                                </div>
                                <div className="border border-gray-300 rounded-sm p-2">
                                    <img src="/assets/1. Ayam Goreng (20K).jpg" alt="" className='rounded-md' />
                                    <div className="flex gap-2 p-2 items-center justify-center">
                                        <p className="text-center">{menuName}</p>
                                        <p className="text-center">{menuPrice}</p>
                                    </div>
                                    <ButtonGroup />
                                </div>
                                <div className="border border-gray-300 rounded-sm p-2">
                                    <img src="/assets/1. Ayam Goreng (20K).jpg" alt="" className='rounded-md' />
                                    <div className="flex gap-2 p-2 items-center justify-center">
                                        <p className="text-center">{menuName}</p>
                                        <p className="text-center">{menuPrice}</p>
                                    </div>
                                    <ButtonGroup />
                                </div>

                                {/* checkout price */}
                                <div className="flex justify-between">
                                    <p className="text-2xl font-bold">Total</p>
                                    <p className="text-2xl font-bold">100K</p>
                                    <button className='px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-sm transition duration-200'>CHECKOUT</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


function QuantityButton() {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center space-x-2 mx-auto">
            <button className="p-1 bg-red-500 text-white rounded" onClick={() => setQuantity(0)}>
                <TrashIcon className="w-6 h-6" />
            </button>
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
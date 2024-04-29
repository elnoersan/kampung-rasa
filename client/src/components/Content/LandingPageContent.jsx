import React from 'react'
import EmblaCarouselComponent from '../Carousel/EmblaCarouselComponent'
import './LandingPageContent.css'





const MainContent = () => {
    return (
        <>
            <div className="">
                <img src="/assets/Logo.png" alt="" className='w-[300px] h-[300px] mx-auto mt-24' />
            </div>
            {/* <div className="flex">
                <button className='px-3 py-2 border border-gray-900 text-gray-900 mx-auto mt-12'>BOOK A TABLE</button>
            </div> */}
            <button className='flex mx-auto mt-12 pb-20'>
                <img src="/assets/noun-go-down.png" alt="" className=' w-10 h-10' />
            </button>

            <div className="relative" id='hero'>
                <marquee behavior="scroll" direction="left" className="bg-gray-900 text-white mt-[98px] items-center h-10 flex justify-center w-full">COMING SOON | COOMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COOMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COOMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COOMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COOMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COOMING SOON </marquee>
                <img src="/assets/content-img-1.jpeg" alt="" className='h-[500px] w-full m-0' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className='inline-flex items-center px-4 py-3 bg-gray-900 text-[#FAEA4F] border-gray-900 hover:border-gray-900 border-2 hover:text-gray-900 hover:bg-[#FAEA4F] tracking-widest rounded-sm transition duration-200'>
                        <span>DINE AT KAMPUNG RASA</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2" width="16" height="16">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full bg-gray-900">
                <h3 className='text-4xl text-white pt-12 ms-28'>OUR RESTAURANTS</h3>
                <EmblaCarouselComponent />
                <div className="w-full bg-[#FAEA4F] pt-12 px-28 pb-12">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="w-[380px] h-[380px] relative">
                            <img src="https://caravanandco.com/cdn/shop/files/improve-your-coffee-making_e47154f5-5f76-4a86-ab7c-df4cd2297a0e.png?crop=center&height=460&v=1680016340&width=400" alt="" className="rounded-md object-cover w-full h-full" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-3xl text-white text-center mb-2">EVENT AT KAMPUNG RASA</p>
                                <button className="inline-flex px-4 py-2 bg-gray-900 text-white rounded-md items-center">
                                    <span>BOOK YOUR EVENT</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2" width="16" height="16" style={{ verticalAlign: 'middle' }}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-[380px] h-[380px] relative">
                            <img src="https://caravanandco.com/cdn/shop/files/improve-your-coffee-making_e47154f5-5f76-4a86-ab7c-df4cd2297a0e.png?crop=center&height=460&v=1680016340&width=400" alt="" className="rounded-md object-cover w-full h-full" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-3xl text-white text-center mb-2">EVENT AT KAMPUNG RASA</p>
                                <button className="inline-flex px-4 py-2 bg-gray-900 text-white rounded-md items-center">
                                    <span>BOOK YOUR EVENT</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2" width="16" height="16" style={{ verticalAlign: 'middle' }}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-[380px] h-[380px] relative">
                            <img src="https://caravanandco.com/cdn/shop/files/improve-your-coffee-making_e47154f5-5f76-4a86-ab7c-df4cd2297a0e.png?crop=center&height=460&v=1680016340&width=400" alt="" className="rounded-md object-cover w-full h-full" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-3xl text-white text-center mb-2">EVENT AT KAMPUNG RASA</p>
                                <button className="inline-flex px-4 py-2 bg-gray-900 text-white rounded-md items-center">
                                    <span>BOOK YOUR EVENT</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2" width="16" height="16" style={{ verticalAlign: 'middle' }}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}


export default function LandingPageContent() {
    return (
        <div className="lp-content">
            <MainContent />
        </div>
    )
}


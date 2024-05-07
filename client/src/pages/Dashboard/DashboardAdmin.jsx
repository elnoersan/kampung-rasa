import React from 'react'
import { SidebarWithLogo } from '../../components/Content/SidebarComponent'
import './DashboardCustom.css'
import { PesananPage } from '../PesananPage/PesananPage'
import { useState } from 'react'
import { GrafikPenjualanPage } from '../GrafikPage/GrafikPenjualanPage'

export const DashboardAdmin = () => {
    const [activeContent, setActiveContent] = useState("pesanan");

    const handleTabChange = (content) => {
        setActiveContent(content);
    };


    const styleGrid = {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        height: '100vh'
    }


    return (
        <div className="grid grid-cols-2" style={styleGrid}>
            <div className="w-fit" style={{ width: 'fit-content' }} >
                <SidebarWithLogo handleTabChange={handleTabChange} />
            </div>
            <div className="w-full">
                <div className="dashboard-admin h-full" >
                    {activeContent === "pesanan" && <PesananPage />}
                    {activeContent === "grafikPenjualan" && <GrafikPenjualanPage />}
                </div>
            </div>
        </div>

    )
}

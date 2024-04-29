import React from 'react'
import NavbarLandingPage from '../../components/Navbar/LpNavbar'
import './LandingPage.css'
import LandingPageContent from '../../components/Content/LandingPageContent'
import { FooterWithLogo } from '../../components/Footer/FooterComponent'

const LandingPage = () => {
    const bgImg = 'url(/assets/Frame.png)'
    const backgroundStyle = {
        backgroundImage: bgImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        position: 'relative',
    }

    return (
        <div className="lp" style={backgroundStyle}>
            <NavbarLandingPage />
            <LandingPageContent />
            <FooterWithLogo />
        </div>
    )
}

export default LandingPage
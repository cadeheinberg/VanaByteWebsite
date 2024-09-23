import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginModal from '../components/LoginModal';
import CompanyInfo from '../components/Contact/CompanyInfo';

function Contact({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    return (
        <div>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <CompanyInfo userData={userData} />
            <Footer userData={userData} />
            <LoginModal
                isLoginModalOpen={isLoginModalOpen}
                closeLoginModal={closeLoginModal}
                displayType={displayType}
                setDisplayType={setDisplayType}
            />
        </div>
    )
}

export default Contact
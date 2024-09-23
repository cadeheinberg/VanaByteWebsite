import React from 'react';
import Navbar from "../components/Navbar";
import HubStats from "../components/Stats/HubStats";
import LoginModal from '../components/LoginModal';
import Footer from "../components/Footer";


function MinecraftStats({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    return (
        <>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <HubStats userData={userData} />
            <Footer userData={userData} />
            <LoginModal
                isLoginModalOpen={isLoginModalOpen}
                closeLoginModal={closeLoginModal}
                displayType={displayType}
                setDisplayType={setDisplayType}
            />
        </>

    )
}

export default MinecraftStats
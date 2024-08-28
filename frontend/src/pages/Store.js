import React from 'react';
import Navbar from "../components/Navbar";
import PaidPlans from "../components/PaidPlans";
import Footer from "../components/Footer";
import LoginModal from '../components/LoginModal';

function Store({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    return (
        <div>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <PaidPlans userData={userData} />
            <Footer userData={userData} />
            <LoginModal
                isLoginModalOpen={isLoginModalOpen}
                closeLoginModal={closeLoginModal}
                displayType={displayType}
                setDisplayType={setDisplayType}
            />
        </div>
    );
}

export default Store;

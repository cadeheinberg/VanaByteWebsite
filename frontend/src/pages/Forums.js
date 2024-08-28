import React from 'react';
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import LoginModal from '../components/LoginModal';

function Home({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    return (
        <div>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <Preview>userData={userData}</Preview>
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

export default Home;
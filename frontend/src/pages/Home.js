import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Home/Hero';
import NewsLetter from "../components/Home/NewsLetter";
import GamePics from '../components/Home/GamePics';
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";
import LoginModal from '../components/LoginModal';

function Home({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    return (
        <div>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <Hero
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <GamePics userData={userData} />
            <NewsLetter userData={userData} />
            <Blog userData={userData} />
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

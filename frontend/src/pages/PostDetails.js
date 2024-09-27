import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginModal from '../components/LoginModal';
import PostDetailsComponent from '../components/Forums/PostDetailsComponent';

function PostDetails({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    return (
        <div>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <PostDetailsComponent />
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

export default PostDetails
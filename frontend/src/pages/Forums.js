import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import LoginModal from '../components/LoginModal';
import ForumHeader from '../components/ForumHeader';
import PostEditorModal from '../components/PostEditorModal';
import EDITOR_MODE from '../enums/editor_mode'

function Forums({ userData, openLoginModal, isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    const [isPostEditorOpen, setPostEditorOpen] = useState(false);
    const [postEditorMode, setPostEditorMode] = useState(EDITOR_MODE.new)

    const openPostEditor = () => {
        setPostEditorOpen(true);
    }

    const closePostEditor = () => setPostEditorOpen(false);

    return (
        <div>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <ForumHeader
                userData={userData}
                openPostEditor={openPostEditor}
                setPostEditorMode={setPostEditorMode}
            />
            <Preview>userData={userData}</Preview>
            <Footer userData={userData} />
            <LoginModal
                isLoginModalOpen={isLoginModalOpen}
                closeLoginModal={closeLoginModal}
                displayType={displayType}
                setDisplayType={setDisplayType}
            />
            <PostEditorModal
                isPostEditorOpen={isPostEditorOpen}
                closePostEditor={closePostEditor}
                postEditorMode={postEditorMode}
            >
            </PostEditorModal>
        </div >
    );
}

export default Forums;
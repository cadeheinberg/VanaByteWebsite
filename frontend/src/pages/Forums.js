import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import LoginModal from '../components/LoginModal';
import LOGIN_MODE from '../enums/enums';
import API_URL from '../config';
import Footer from "../components/Footer";
import Preview from '../components/Preview';

class UserData {
    constructor(auth = false, userId = null, userName = null, profileImg = null) {
        this.auth = auth;
        this.userId = userId;
        this.userName = userName;
        this.profileImg = profileImg;
    }
}

function MinecraftStats() {
    const [userData, setUserData] = useState(null);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [displayType, setDisplayType] = useState(LOGIN_MODE.register)

    const openLoginModal = (mode) => {
        setLoginModalOpen(true);
        console.log(mode)
        setDisplayType(mode);
        console.log(displayType)
    }

    const closeLoginModal = () => setLoginModalOpen(false);

    const fetchUserData = async () => {
        try {
            const res = await fetch(`${API_URL}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (res.ok) {
                if (res.status === 204) {
                    console.log("no jwt token found in browser")
                } else if (res.status === 201) {
                    const resData = await res.json();
                    console.log("jwt token found in browser")
                    console.log(resData);
                    setUserData(new UserData(true, resData.user_id, resData.username, resData.profileImg));
                }
            } else {
                setUserData(null);
            }
        } catch (err) {
            console.error("Error fetching data:", err.message);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);


    return (
        <>
            <Navbar
                userData={userData}
                openLoginModal={openLoginModal}
            />
            <Preview userData={userData} />
            <Footer userData={userData} />
            <LoginModal
                isModalOpen={isLoginModalOpen}
                closeModal={closeLoginModal}
                displayType={displayType}
                setDisplayType={setDisplayType}
            />
        </>

    )
}

export default MinecraftStats
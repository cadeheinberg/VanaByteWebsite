import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Preview from "../components/Preview";
import NewsLetter from "../components/NewsLetter";
import PaidPlans from "../components/PaidPlans";
import Footer from "../components/Footer";

class UserData {
    constructor(auth = false, userId = null, userName = null, profileImg = null) {
        this.auth = auth;
        this.userId = userId;
        this.userName = userName;
        this.profileImg = profileImg;
    }
}

function Home() {
    // State to store user data
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Use fetch to get user data
        fetch('http://localhost:5003')
            .then(response => response.json())
            .then(data => {
                if (data.Status === "Success") {
                    setUserData(new UserData(true, data.userId, data.userName, data.profileImg));
                } else {
                    setUserData(null);
                    //setUserData(new UserData(true, "123", "John S.", "data.profileImg"));
                }
            })
            .catch(err => console.error("Error checking authentication:", err));
    }, []);

    return (
        <div>
            <Navbar userData={userData} />
            <Hero userData={userData} />
            <Preview userData={userData} />
            <NewsLetter userData={userData} />
            <PaidPlans userData={userData} />
            <Footer userData={userData} />
        </div>
    );
}

export default Home;

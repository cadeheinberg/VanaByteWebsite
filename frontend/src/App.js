import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LOGIN_MODE from './enums/login_mode';
import API_URL from './config';
import Home from './pages/Home';
import MinecraftStats from "./pages/MinecraftStats";
import Forums from "./pages/Forums";
import Store from "./pages/Store";
import Contact from "./pages/Contact";

class UserData {
  constructor(web_uuid = null, mc_uuid = null, username = null, profile = null) {
    this.web_uuid = web_uuid;
    this.mc_uuid = mc_uuid;
    this.username = username;
    this.profile = profile;
  }
}

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [displayType, setDisplayType] = useState(LOGIN_MODE.register)

  const openLoginModal = (mode) => {
    setLoginModalOpen(true);
    setDisplayType(mode);
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
          console.log("no jwt token found in browser, not logged in")
        } else if (res.status === 201) {
          const resData = await res.json();
          console.log("jwt token found in browser, logged in")
          setUserData(new UserData(resData.web_uuid, resData.web_uuid, resData.username, resData.profile));
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
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              userData={userData}
              openLoginModal={openLoginModal}
              isLoginModalOpen={isLoginModalOpen}
              closeLoginModal={closeLoginModal}
              displayType={displayType}
              setDisplayType={setDisplayType}
            />
          }
        ></Route>
        <Route path='/stats' element={<MinecraftStats
          userData={userData}
          openLoginModal={openLoginModal}
          isLoginModalOpen={isLoginModalOpen}
          closeLoginModal={closeLoginModal}
          displayType={displayType}
          setDisplayType={setDisplayType} />}></Route>
        <Route path='/forums' element={<Forums
          userData={userData}
          openLoginModal={openLoginModal}
          isLoginModalOpen={isLoginModalOpen}
          closeLoginModal={closeLoginModal}
          displayType={displayType}
          setDisplayType={setDisplayType} />}></Route>
        <Route path='/store' element={<Store
          userData={userData}
          openLoginModal={openLoginModal}
          isLoginModalOpen={isLoginModalOpen}
          closeLoginModal={closeLoginModal}
          displayType={displayType}
          setDisplayType={setDisplayType} />}></Route>
        <Route path='/contact' element={<Contact
          userData={userData}
          openLoginModal={openLoginModal}
          isLoginModalOpen={isLoginModalOpen}
          closeLoginModal={closeLoginModal}
          displayType={displayType}
          setDisplayType={setDisplayType} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

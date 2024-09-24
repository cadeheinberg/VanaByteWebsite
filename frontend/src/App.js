import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LOGIN_MODE from './enums/login_mode';
import API_URL from './config';
import Home from './pages/Home';
import MinecraftStats from "./pages/MinecraftStats";
import Forums from "./pages/Forums";
import Store from "./pages/Store";
import Contact from "./pages/Contact";

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
      const res = await fetch(`${API_URL}v1/auth/cookie`, {
        method: 'GET',
        credentials: 'include'
      });
      const resData = await res.json();
      if (res.ok) {
        setUserData(resData.user);
      } else {
        console.log(resData.message)
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

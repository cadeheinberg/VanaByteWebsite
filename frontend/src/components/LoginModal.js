import React, { useState, Fragment } from 'react';
import Modal from './Modal'
import LOGIN_MODE from '../enums/enums';
import API_URL from '../config';

function LoginModal({ isLoginModalOpen, closeLoginModal, displayType, setDisplayType }) {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`${API_URL}login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials),
                credentials: 'include'
            });
            console.log(res);
            const resData = await res.json();
            console.log(resData)
            if (res.ok) {
                console.log('reloading')
                window.location.reload(true);
            } else {
                console.log(resData.message)
                setLoginError(resData.message)
            }
        } catch (err) {
            console.error(err.message);
            setLoginError(err.message)
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`${API_URL}register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials),
                credentials: 'include'
            });
            console.log(res);
            const resData = await res.json();
            console.log(resData)
            if (res.ok) {
                console.log('reloading')
                window.location.reload(true);
            } else {
                console.log(resData.message)
                setLoginError(resData.message)
            }
        } catch (err) {
            console.error(err.message);
            setLoginError(err.message)
        }
    }

    const handleCloseLoginModal = () => {
        closeLoginModal();
    };

    const isRegisterMode = () => displayType === LOGIN_MODE.register;

    return (
        <Modal isOpen={isLoginModalOpen} closeModal={handleCloseLoginModal}>
            <h2 className="text-2xl font-bold my-5 text-myblack border-b">{isRegisterMode() ? 'Create Account' : 'Log In'}</h2>
            <form onSubmit={isRegisterMode() ? handleRegister : handleLogin} className="w-full">
                {
                    isRegisterMode()
                        ?
                        <div className="mb-6">
                            <label className="text-slate-600 font-medium text-lg"
                                htmlFor="username">Username:
                            </label>
                            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                                name="email" type="text" placeholder="Enter Email" onChange={e => setCredentials({ ...credentials, username: e.target.value })}>
                            </input>
                        </div>
                        :
                        null
                }
                <div className="mb-6">
                    <label className="text-slate-600 font-medium text-lg"
                        htmlFor="email">Email:
                    </label>
                    <input className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                        name="email" type="email" placeholder="Enter Email" onChange={e => setCredentials({ ...credentials, email: e.target.value })}>
                    </input>
                </div>
                <div className="mb-6">
                    <label className="text-slate-600 font-medium text-lg"
                        htmlFor="password">Password:
                    </label>
                    <input className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                        name="password" type="password" placeholder="Enter Password" onChange={e => setCredentials({ ...credentials, password: e.target.value })}>
                    </input>
                </div>
                <div>
                    <p className={loginError ? 'text-red-500 font-medium bg-red-100 p-2 block' : 'hidden'}>{loginError}</p>
                </div>
                <div className='w-[80%] mx-auto mt-6 mb-4'>
                    <button className='text-myblack bg-mygreen w-full rounded-md font-medium py-3 px-6' type='submit'>{isRegisterMode() ? 'Create Account' : 'Log In'}</button>
                </div>
                <p className='text-slate-600 mb-8'>Note: By {isRegisterMode() ? 'creating an account' : 'signing in'} you agree to our privacy terms and polcies</p>
            </form>
            {
                isRegisterMode()
                    ?
                    <Fragment>
                        <h2 className="text-2xl font-bold my-1 text-myblack border-b">Already have An Account?</h2>
                        <div className='w-[80%] mx-auto my-6'>
                            <button onClick={() => {
                                setDisplayType(LOGIN_MODE.login)
                                setLoginError(null)
                            }}
                                className='text-mygreen bg-myblack w-full rounded-md font-medium py-3 px-6'>Log In</button>
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <h2 className="text-2xl font-bold my-1 text-myblack border-b">Don't Have an Account?</h2>
                        <div className='w-[80%] mx-auto my-6'>
                            <button onClick={() => {
                                setDisplayType(LOGIN_MODE.register)
                                setLoginError(null)
                            }}
                                className='text-mygreen bg-myblack w-full rounded-md font-medium py-3 px-6'>Create Account</button>
                        </div>
                    </Fragment>
            }
        </Modal>
    )
}

export default LoginModal
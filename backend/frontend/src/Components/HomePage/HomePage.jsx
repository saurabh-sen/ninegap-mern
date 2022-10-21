import { React, useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'

const HomePage = () => {

    const [token, setToken] = useState('');
    const [login, setLogin] = useState(false)

    useEffect(() => {
        let token = getCookie("jwtoken");
        if (token != "") {
            setLogin(true);
            setToken(token);
            callHomePage(token);
        }
    }, [])


    const [email, setEmail] = useState('');

    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [photoUrl, setPhotoUrl] = useState('');


    const callHomePage = async (tokenAuth) => {

        let authToken = {
            authToken: tokenAuth
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                authToken
            })
        }
        const res = await fetch('https://ninegap-mern.herokuapp.com/dashboard', options)

        const data = await res.json();

        if(data.rootUser){
            setEmail(data.rootUser.email);
            setFirstName(data.rootUser.firstName);
            setLastName(data.rootUser.lastName);
            setPhotoUrl(data.rootUser.photoUrl);
        }
    }


const getCookie = cname => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

return (
    <>
        <Navbar login={login} token={token} />
        {
            login ?
                <Dashboard email={email} firstName={firstName} lastName={lastName} photoUrl={photoUrl} />
                :
                <div className='HomePage sm:h-[89vh] flex justify-center items-center'>
                    <div className="HomePage__container ">
                        <div className="HomePage__container__text flex justify-center items-center flex-col">
                            <p className="HomePage__container__text__hi text-2xl sm:text-3xl text-blue-500 font-mono">Hey!</p>
                            <p className="HomePage__container__text__welcome font-mono text-3xl sm:text-4xl">Welcome to the best <span className='text-pink-500 font-semibold'> Frontends.</span></p>
                        </div>
                    </div>
                </div>
        }

    </>
)
}

export default HomePage
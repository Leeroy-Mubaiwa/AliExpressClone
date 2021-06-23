import React,{useState,useEffect} from 'react';
import '../../Style/Style.css';
import ModalLogin from '../Modal/Modal'


export default function Account() {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        storeLogin();
    }, [])

    const storeLogin = () => {
        let store = JSON.parse(localStorage.getItem('login'));
        if (store && store.login){
            setLogin(true);
        }
    }

    console.log(login);

    return (
        <div className="main">
            <div className='user'>
                {
                    login ? 
                        <><img src="https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"/>
                        <h5>Welcome Arian</h5></>
                    :
                    <>
                        <img src="https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"/>
                        <h5>Welcome to AliExpress</h5>
                    </>
                }
                
            </div>
            <div className='buttons'>
                <button>Join</button>
                <ModalLogin/>
            </div>
        </div>
    )
}

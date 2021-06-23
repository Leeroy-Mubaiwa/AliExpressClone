import React,{useState} from 'react';
import Modal from 'react-modal';
import '../../Style/Style.css';
import {useDispatch} from 'react-redux';
import { login } from '../../../redux/UserSlice';

const ModalLogin = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width                 : 450,
          borderRadius          : 8
        }
    };
    function openModal() {
    setIsOpen(true);
    }
    function closeModal(){
    setIsOpen(false);
    }
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

   const dispatch = useDispatch();

    const handleSubmit = (e)  => {
        e.preventDefault();

        fetch('https://reqres.in/api/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email,password:password })
        })
        .then((res) => {
            res.json().then((result) => {
                console.log("result", result);
                if(result.error){setError(result.error)}
                else{
                    localStorage.setItem('login', JSON.stringify({
                        token:result.token,
                        login:true
                    }));
                    localStorage.setItem('user', JSON.stringify({res}));
                    console.log(res);
                    dispatch(
                        login({
                            email:email,
                            password:password,
                            isSignedIn:true
                        })
                    );
                    setIsOpen(false);
                }
            })
        })    
    }
    

    return(
        <div>
            <button onClick={openModal}>Sign in</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div className='modal-login'>
                    <div className='modal-logo'>
                        <img src="https://ae01.alicdn.com/kf/H499c11b7e0094a2294b33e4af09ebea34.png"/>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="email" name="email" className="modal-input" placeholder="Email address or member ID" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <input type="password" name="password" className="modal-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <input type="submit" className="modal-submit" disabled={validateForm} value='Sign In' />
                    </form>
                    {
                        error ? 
                        <div className='error'>
                            <p>{error}</p>
                        </div>
                        : null
                    }
                    <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                </div>
            </Modal>
        </div>
    )
}

export default ModalLogin;
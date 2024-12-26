import axios from "axios";
import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/users/login`, {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                if (response.data.status === 200) {
                    console.log(response.data.status);
                    sessionStorage.setItem("isLogged", true);
                    console.log(response.data);
                    sessionStorage.setItem('userId',response.data.data.userId);
                    navigate('/')
                } else {
                    sessionStorage.setItem("isLogged", false);
                    navigate('./UserLogin')
                }
            })
            .catch(function (error) {
                alert("Plaese Enter Valid Data....");
                console.log(error);
            })
    }

    const Register = () => {
        navigate('./UserRegister')
    }

    const navigateToHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className="bg-color">
                <div className="pop-up">
                    <div className="close-button" onClick={() => {navigateToHome()}}>
                        <CloseButton />
                    </div>
                    <form method="post">
                        <h2 className="login-tag">Log In</h2>
                        <div className="input-group">
                            <input type="email" id="email" className="form-control" placeholder="Email" autoComplete="off" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="input-group">
                            <input type="password" id="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="input-group mt-5">
                            <button onClick={Login}>Log in</button>
                        </div>
                        <div>
                            <p onClick={Register} style={{cursor : "pointer",color : "Black"}}>Register Now?</p>
                        </div>
                    </form>
                </div>
            </div>            
        </>
    )
}

export default UserLogin;
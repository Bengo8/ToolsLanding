import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/signin.css';
import UsersService from '../services/UsersService';

const _userService = new UsersService();

export const RegisterComponent = ({ onLogin }) => {
    // private component functions
    const _checkRegisterInputs = () => {
        var errorString = "";
        if (email === '' || !email.includes("@") || email.includes(' ')) {
            errorString += 'Error! Email no válido.'
            setLoginError(errorString);
            return false;
        } else if (userName === '') {
            errorString += 'Error! Nombre de Usuario no introducido.'
            setLoginError(errorString);
            return false;
        } else if (passWord === '') {
            errorString += 'Error! Contraseña no introducida.'
            setLoginError(errorString);
            return false;
        } else if (repeatPassWord !== passWord) {
            errorString += 'Error! Las contraseñas no coinciden.'
            setLoginError(errorString);
            return false;
        }

        return true;
    }

    const _checkDataFromRegisterRequest = (data) => {
        if (data === 0) {
            setLoginError("Error! Ya existe un usuario con ese nombre");
        } else if (data === 1) {
            setLoginError("Error! Ya existe un usuario con ese email");
        } else if (data.userName !== undefined && data.userName !== null && data.userName !== '') {
            setLoginError("");
            _userService.setCurrentUser(data, rememberUser);
            onLogin(_userService.getCurrentUser());
            _navigate("/")
        }
    }
    //

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [repeatPassWord, setRepeatPassWord] = useState("");
    const [rememberUser, setRememberUser] = useState(true);
    const [loginError, setLoginError] = useState('');

    const _navigate = useNavigate();

    // html component functions
    const register = () => {
        if (!_checkRegisterInputs()) {
            return;
        }

        _userService.register(email, userName, passWord).then((data) => {
            if (data !== undefined && data !== null) {
                _checkDataFromRegisterRequest(data);
            } else {
                setLoginError("Error al intentar crear la cuenta");
            }
            console.log(data);
        }).catch((error) => {
            setLoginError("Error al intentar crear la cuenta");
        });
    }
    //

    return (
        <>
            <div className="form-signin">
                <div>
                    <h1 className="h3 mb-3 fw-normal">Crear Cuenta</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" maxLength="18" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className="lblPlaceHolder" for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingUsername" minLength="2" maxLength="20" placeholder="Nombre de Usuario" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <label className="lblPlaceHolder" for="floatingUsername">Nombre de Usuario</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" maxLength="15" placeholder="Password" value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                        <label className="lblPlaceHolder" for="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingRepeatPassword" placeholder="RepeatPassword" value={repeatPassWord} onChange={(e) => setRepeatPassWord(e.target.value)} />
                        <label className="lblPlaceHolder" for="floatingRepeatPassword">Repetir Contraseña</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" checked={rememberUser} onChange={(e) => setRememberUser(e.target.checked)} /> Recordar sesión
                        </label>
                    </div>
                    <div className="loginError"><a>{loginError}</a></div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => register()}>Registrate</button>
                </div>
            </div>
        </>
    )
}

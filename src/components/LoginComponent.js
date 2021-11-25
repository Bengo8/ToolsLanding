import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../assets/signin.css';
import UsersService from '../services/UsersService';

const _userService = new UsersService();
export const LoginComponent = ({ onLogin }) => {
    // private component functions
    const _checkLoginInputs = () => {
        var errorString = "";
        if (userName === '') {
            errorString += 'Error! Nombre de Usuario no introducido.'
            setLoginError(errorString);
            return false;
        } else if (passWord === '') {
            errorString += 'Error! Contraseña no introducida.'
            setLoginError(errorString);
            return false;
        }

        return true;
    }

    const _checkDataFromLoginRequest = (data) => {
        if (data === 0) {
            setLoginError("Error! No existe ningún usuario registrado con ese nombre");
        } else if (data === 1) {
            setLoginError("Error! Contraseña errónea");
        } else if (data.userName !== undefined && data.userName !== null && data.userName !== '') {
            setLoginError("");
            _userService.setCurrentUser(data, rememberUser);
            onLogin(_userService.getCurrentUser());
            _navigate("/")
        }
    }
    //

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [rememberUser, setRememberUser] = useState(true);
    const [loginError, setLoginError] = useState('');

    const _navigate = useNavigate();

    // html component functions
    const login = () => {
        if (!_checkLoginInputs()) {
            return;
        }

        _userService.login(userName, passWord).then((data) => {
            if (data !== undefined && data !== null) {
                _checkDataFromLoginRequest(data);
            } else {
                setLoginError("Error al intentar iniciar sesión");
            }
        }).catch((error) => {
            setLoginError("Error al intentar iniciar sesión");
        });
    }
    //

    return (
        <>
            <div className="form-signin">
                <div>
                    <h1 className="h3 mb-3 fw-normal">Por favor inicia sesión</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingUsername" placeholder="Nombre de Usuario" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <label className="lblPlaceHolder" for="floatingUsername">Nombre de Usuario</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                        <label className="lblPlaceHolder" for="floatingPassword">Contraseña</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" checked={rememberUser} onChange={(e) => setRememberUser(e.target.checked)} /> Recordar sesión
                        </label>
                    </div>
                    <div className="loginError"><a>{loginError}</a></div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => login()}>Iniciar Sesión</button><br /><br />
                    <Link to="/register"><button className="w-100 btn btn-lg btn-success registerButtonOnLogin">¿No tienes cuenta? Registrate!</button></Link>
                </div>
            </div>
        </>
    )
}

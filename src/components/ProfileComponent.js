import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../assets/styles.css';
import UsersService from '../services/UsersService';

const _usersSrvc = new UsersService();
export const ProfileComponent = ({ currentUser, onLogOut }) => {
    // private component functions
    const _userControls = () => {
        user = currentUser;
        if (user !== undefined && user !== null) {
            _usersSrvc.setCurrentUser(user, false);
        }
    }
    //

    const _navigate = useNavigate();
    let user = null;
    _userControls();

    const [editData, seteditData] = useState(false);
    const [email, setEmail] = useState(user.email);
    const [userName, setUserName] = useState(user.userName);
    const [passWord, setPassWord] = useState(user.passWord);

    // html component functions
    const SaveUserNewData = (save) => {
        if (save) {

        } else {
            setEmail(user.email);
            setUserName(user.userName);
            setPassWord(user.passWord);
        }

        seteditData(!editData)
    }

    const LogOutUser = () => {
        _usersSrvc.logOut();
        onLogOut();
        _navigate("/");
    }
    //

    return (
        <div className="profileDiv">
            <h1 className={editData ? "profileWelcome underline editingData" : "profileWelcome underline"}>Bienvenido {userName}</h1><br /><br />
            <div className="profileData">
                <h5><strong className={editData ? "profileItem underline editingData" : "profileItem underline"}>Email:</strong>{!editData ? (<> {email}</>) : (<><input type="text" className="form-control" id="dateEdit" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></>)}</h5>
                <h5><strong className={editData ? "profileItem underline editingData" : "profileItem underline"}>Nombre de usuario:</strong>{!editData ? (<> {userName}</>) : (<><input type="text" className="form-control" id="dateEdit" placeholder="Nombre de Usuario" value={userName} onChange={(e) => setUserName(e.target.value)} /></>)}</h5>
                <h5><strong className={editData ? "profileItem underline editingData" : "profileItem underline"}>Contraseña:</strong>{!editData ? (<> {passWord}</>) : (<><input type="text" className="form-control" id="dateEdit" placeholder="Contraseña" value={passWord} onChange={(e) => setPassWord(e.target.value)} /></>)}</h5><br></br>
            </div>
            <button className="w-100 btn btn-lg btn-success editUserData" onClick={() => SaveUserNewData(true)}>{editData ? "Guardar Cambios" : "Editar datos"}</button>

            {editData ? (<><button className="w-100 btn btn-lg btn-warning editUserDataCancel" onClick={() => SaveUserNewData(false)}>Cancelar Cambios</button><br /><br /></>) : (<></>)}
            <button className="w-100 btn btn-lg btn-danger logOutButton" onClick={LogOutUser}>Cerrar Sesión</button>
        </div>
    )
}

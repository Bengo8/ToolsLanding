import React from 'react'
import '../assets/styles.css';
import { useNavigate } from "react-router-dom";
import UsersService from '../services/UsersService';

const _usersSrvc = new UsersService();
export const HomeComponent = ({ currentUser }) => {
    // private component functions
    const _userControls = () => {
        _user = currentUser;
        if (_user === null) {
            _usersSrvc.logOut();
        } else {
            _usersSrvc.setCurrentUser(_user, false);
        }
    }
    //

    const _navigate = useNavigate();
    let _user = null;
    _userControls()

    // html component functions
    const NavigateToTools = () => {
        if (!_usersSrvc.isCurrentUserLoged()) {
            _navigate("/login")
        } else {
            _navigate("/tools")
        }
    }
    //

    return (
        <>

            <main className="px-3">
                <h1>Herramientas Útiles</h1>
                <p className="lead">Herramientas útiles para el día a día.</p><br />
                <p className="lead">
                    {/* <Link to="/tools"><a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Ver Herramientas</a></Link> */}
                    <a onClick={NavigateToTools} className="btn btn-lg btn-secondary fw-bold border-white bg-white">Ver Herramientas</a>
                </p>
            </main>
        </>
    )
}

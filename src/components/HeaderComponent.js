import { React } from 'react'
import { NavLink } from "react-router-dom";
import '../assets/styles.css';
import UsersService from '../services/UsersService';

const _usersSrvc = new UsersService();
export const HeaderComponent = ({ currentUser, onLogOut }) => {
    // private component functions
    const _userControls = () => {
        user = currentUser;
        if (user !== undefined && user !== null) {
            _usersSrvc.setCurrentUser(user, false);
        }
        isLoged = _usersSrvc.isCurrentUserLoged();
    }
    //

    let user = null;
    let isLoged = false;
    _userControls();

    return (
        <>
            <header className="mb-auto">
                <div>
                    <h3 className="title-header"><NavLink to="/" className="float-md-start mb-0">Herramientas Útiles</NavLink></h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        {!isLoged || user === null || user === undefined ?
                            (
                                <NavLink to={{
                                    pathname: '/login',
                                    state: { title: 'from home page' }
                                }} className="nav-link" aria-current="page">Log in</NavLink>
                            ) :
                            (
                                <>
                                    <NavLink to="/tools" className="nav-link" aria-current="page">Herramientas</NavLink>
                                    <NavLink to="/profile" className="nav-link" aria-current="page">Bienvenido {user.userName}</NavLink>
                                </>
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

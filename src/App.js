import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import '../src/assets/styles.css';
import { HeaderComponent } from './components/HeaderComponent';
import { HomeComponent } from './components/HomeComponent';
import { ToolsComponent } from './components/ToolsComponent'
import { FooterComponent } from './components/FooterComponent';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from "./components/RegisterComponent";
import UsersService from "./services/UsersService";
import { ProfileComponent } from "./components/ProfileComponent";

import modules from '../src/modules';

const _userService = new UsersService();
function App() {
  const [currentUser, setCurrentUser] = useState(_userService.getCurrentUser());

  return (
    <>
      <Router>
        <HeaderComponent currentUser={currentUser} onLogOut={() => setCurrentUser(null)} ></HeaderComponent>
        <Routes>
          <Route path='/' element={<HomeComponent currentUser={currentUser} />} />
        </Routes>
        <Routes>
          <Route path='/tools' element={<ToolsComponent />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<LoginComponent onLogin={(user) => setCurrentUser(user)} />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<RegisterComponent onLogin={(user) => setCurrentUser(user)} />} />
        </Routes>
        <Routes>
          <Route path='/profile' element={<ProfileComponent currentUser={currentUser} onLogOut={() => setCurrentUser(null)} />} />
        </Routes>
        {modules.filter(module => module.routeProps.type === 'toolModule').map(module => (
          <Routes>
            <Route path={module.routeProps.path} element={<module.routeProps.component />} key={module.name} />
          </Routes>
        ))}
        <FooterComponent></FooterComponent>
      </Router>
    </>
  );
}

export default App;

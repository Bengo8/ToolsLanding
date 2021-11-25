
import LocalStorageService from '../services/LocalStorageService'
import EncryptionService from './EncryptionService';

export default class UsersService {
    constructor() {
        this._cacheService = new LocalStorageService();
        this._encryptService = new EncryptionService();
        this._settings = require('../assets/appSettings.json');
        this._currentUser = null;
        this._loadCurrentUserData();
    }

    isCurrentUserLoged = () => {
        return this._currentUser !== null && this._currentUser !== undefined;
    }

    getCurrentUser = () => {
        return this._currentUser;
    }

    setCurrentUser = (userData, updateCache = true) => {
        this._setUserData(userData, updateCache);
    }

    login = (userName, pass) => {
        const data = { userName: userName, passWord: pass };
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/login/' + data.userName + '/' + data.passWord, { method: 'GET' })
                .then((response) => {
                    let json = response.json();
                    if (json !== null && json !== undefined) {
                        resolve(json);
                    } else {
                        reject(null);
                    }
                })
                .catch((error) => {
                    reject(error);
                });

        })
    }

    logisn = (userName, pass, data2) => {
        const data = { userName: userName, passWord: pass };
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/login/' + data.userName + '/' + data.passWord + '/' + data2, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                    'X-Api-IP': '12345'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then((response) => {
                    let json = response.json();
                    if (json !== null && json !== undefined) {
                        resolve(json);
                    } else {
                        reject(null);
                    }
                })
                .catch((error) => {
                    reject(error);
                });

        })
    }

    register = (email, userName, pass) => {
        const data = { email: email, userName: userName, passWord: pass };
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/register/' + data.email + '/' + data.userName + '/' + data.passWord, { method: 'GET' })
                .then((response) => {
                    let json = response.json();
                    if (json !== null && json !== undefined) {
                        resolve(json);
                    } else {
                        reject(null);
                    }
                })
                .catch((error) => {
                    reject(error);
                });

        })
    }


    logOut = () => {
        this._currentUser = null;
        this._cacheService.deleteItem(this._settings.localStorage.userDataEncripted);
    }

    getUserData = (userName) => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/login')
                .then((response) => {
                    let json = response.json();
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                });

        })
    }

    getAllUsersData = () => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/users')
                .then((response) => {
                    let json = response.json();
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                });

        })
    }

    // private functions 
    _loadCurrentUserData = () => {
        const userDataFromCache = this._cacheService.getItem(this._settings.localStorage.userDataEncripted);

        if (userDataFromCache !== null && this._checkIfCacheDataValid(userDataFromCache)) {
            this._setUserData(userDataFromCache);
        } else if (userDataFromCache !== null && userDataFromCache.userName !== null && userDataFromCache.userName !== undefined) {
            this.getUser(userDataFromCache.userName).then((data) => {
                this._setUserData(data);
            }).catch((error) => {
                console.log(error)
                return false;
            });
        }

        return true;
    }

    _checkIfCacheDataValid = (userData) => {
        return true;
    }

    _setUserData = (userData, updateCahce = true) => {
        if (userData !== null && userData !== undefined) {
            this._currentUser = userData;

            if (updateCahce) {
                this._cacheService.setItem(this._settings.localStorage.userDataEncripted, this._currentUser);
            }
        }
    }
}
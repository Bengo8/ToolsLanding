
export default class LocalStorageService {
    constructor() {
        this._dataCache = window.localStorage;
    }

    getItem = (key) => {
        if (key !== null && key !== undefined) {
            let cacheItem = this._dataCache.getItem(key);
            cacheItem = JSON.parse(cacheItem);
            return cacheItem !== null && cacheItem !== undefined ? cacheItem : null;
        } else {
            return null;
        }
    }

    setItem = (key, value) => {
        if (key !== null && key !== undefined && value !== null && value !== undefined) {
            value = JSON.stringify(value);
            this._dataCache.setItem(key, value);
            return true;
        } else {
            return false;
        }
    }

    deleteItem = (key) => {
        const item = this.getItem(key);
        if (item !== null && item !== undefined) {
            this._dataCache.removeItem(key);
            return true;
        } else {
            return false;
        }
    }

    cleanCache = () => {
        try {
            this._dataCache.clear();
            return true;
        } catch (ex) {
            return false;
        }
    }
}
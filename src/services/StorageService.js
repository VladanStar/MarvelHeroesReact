class StorageService {
    set(key, value) {
        const valueToStore = JSON.stringify(value)
        localStorage.setItem(key, valueToStore)
        return valueToStore
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export const storageService = new StorageService()
interface LocalStorageServiceInterface {
    get<T>(key: string): T | null;
    set<T>(key: string, data: T): void;
    remove(key: string): void;
}

export const localStorageService: LocalStorageServiceInterface = {
    get<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data) as T;
        }
        return null;
    },
    set<T>(key: string, data: T): void {
        localStorage.setItem(key, JSON.stringify(data));
    },
    remove(key: string): void {
        localStorage.removeItem(key);
    },
};

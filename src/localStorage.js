// pega o state do localStorage
export const loadState = () => {
    // trycatch pois alguns localStorages são bloqueados
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            // default state dos reducers vai valer
            return undefined;
        }
        // tranforma o localStorage data em object
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined;
    }
}

// salva o state no localStorage
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.error('erro ao salvo no localStorage', error)
    }
}
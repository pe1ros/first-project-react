export const isAuthorized = () => {
    if(localStorage.getItem('userData')){
        return true
    }
    return false
};
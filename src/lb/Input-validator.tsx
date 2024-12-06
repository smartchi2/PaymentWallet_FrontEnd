export const isEmail = (email) => 
    /^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[a-z]{2,4}$/i.test(email);

export const allLetter = (text) =>{
    if (text.trim().length < 7 || text.trim().length > 30){
        return false;
    }else{
        return true;
    }
}
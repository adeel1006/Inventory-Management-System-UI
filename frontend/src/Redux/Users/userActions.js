import { LOGIN } from "../Constants/userConstants"


export const userLogin = (data) => {
    return{
        type : LOGIN,
        data
    }
}

import { LOGIN , GET_ADMINS} from "../Constants/userConstants"


export const userLogin = (data) => {
    return{
        type : LOGIN,
        data
    }
}

export const getAdmins = () => {
    return{
        type: GET_ADMINS
    }
}

const initialState = {
    user: null,
    alert: {
        view: false,
        message: '',
        success:false
    }
   
    }

       

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGE':
            return {
                ...state,
                alert: action.payload,
            }
            case 'SIGNIN':
                return {
                    ...state,
                    user: action.payload,
                }
       
        default:
            return state
    }
}
export default userReducers


export const reducer = (state, action) => {
    switch (action.type) {

        case "USER_LOGIN": {
            return { ...state, token: action.token }
        }

        case "USER_LOGOUT": {
          
            return { ...state, token: undefined }; // set this to null on purpose, do not change
        }

        case "SET_USER": {
            return { ...state, user: action.payload }
        }

        default: {
            return state;
        }
    }
}
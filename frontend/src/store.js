import {createStore} from 'redux';
    
    // state
    const initialState = {
        identified: false,
        identity: null,
    };

    // action creators
    export const signin = (user) => ({type: "signin"});
    export const signout = () => ({type: "signout"});

    function reducer (state= initialState, action) {
        if(action.type === "signin") {
            return "à développer";
        }
        if(action.type === "signout") {
            return initialState;
        }
        return state;
    }

export const store = createStore(reducer);
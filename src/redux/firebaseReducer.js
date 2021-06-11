export default function firebaseReducer (state = {}, action) {
    switch (action.type) {
        case ('USER_DATA') : 
            console.log(action.payload, '<<<>>>payload')
            return action.payload
        default: 
            return state
    }
}


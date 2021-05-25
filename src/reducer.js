const Reducer = (state,action) => {
    switch (action.type) {
        case "ADD_TRACK":
            console.log(action.payload,"action");
            return[
                ...state,
                action.payload
            ]
            break;
            case "DELETE_TRACK":
                return state.filter((val)=> val.id !== action.payload);

            case "EDIT_TRACK":
                return state.map((val) => {
                    if (val.id == action.payload.id) {
                        return action.payload
                    }
                    return val
                })
        default:
            break;
    }
}
export default Reducer
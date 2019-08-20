const DEFAULT_STATE = {
    flatlist: 'sample'
}

const userFlatlistReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case 'DISPLAY_USER_FLATLIST':
            return action.payload;
        default:
            return state;
    }


}

export default userFlatlistReducer;
const counterReducer = (state= null, action) => {
    switch(action.type){
        case 'INCREMENT':
            return action.payload;
        // case 'DECREMENT':
        //     return state - 1;
        default:
            return state; 
    }   
} 


export default counterReducer;
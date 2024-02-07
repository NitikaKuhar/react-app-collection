export const reducer = (state, action) =>{
    switch(action.type){

        case 'Increase':
            return {count: state.count + 1};
        case 'Decrement':
            return {count: state.count - 1};
        case 'Reset':
            return {count: 0};
        case 'Plus 10':
            return {count: state.count + 10};
        case 'Minus 10':
            return {count: state.count - 10};
        default:
            return state
    }
}

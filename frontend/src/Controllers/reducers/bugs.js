const reducer = (bugs = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...bugs, action.payload];
        default:
            return bugs;
    }
}

export default reducer
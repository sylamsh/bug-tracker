const reducer = (bugs = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...bugs, action.payload];
        case 'UPDATE':
            return bugs.map((bug) => bug._id === action.payload._id ? action.payload : bug);
        default:
            return bugs;
    }
}

export default reducer
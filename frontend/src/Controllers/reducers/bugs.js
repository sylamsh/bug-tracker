const reducer = (bugs = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...bugs, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
            return bugs.map((bug) => bug._id === action.payload._id ? action.payload : bug);
        case 'DELETE':
            return bugs.filter((post) => post._id !== action.payload);
        default:
            return bugs;
    }
}

export default reducer
const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]}
        case 'REMOVE_CUSTOMERS':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

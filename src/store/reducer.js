import * as actions from './actionTypes'

const initialState = {
    expenses : [],
    totalExpenses : 0,
    totalSpent : 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_EXPENSE:
            const expense = {
                title : action.title,
                description : action.description,
                price : action.price,
                category : action.category,
                date : action.date
            }
            const updatedState = {
                totalExpenses : state.totalExpenses + 1,
                totalSpent : state.totalSpent + action.price,
                expenses : state.expenses.concat(expense)
            }
            return updatedState
    
        default:
            return state
    }
}

export default reducer
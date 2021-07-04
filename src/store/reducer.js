import * as actions from './actionTypes'

const initialState = {
    expenses : [],
    totalExpenses : 0,
    totalSpent : 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_EXPENSE:
            let expense = {
                id: action.id,
                title : action.title,
                description : action.description,
                price : action.price,
                category : action.category,
                date : action.date
            }
            return {
                totalExpenses : state.totalExpenses + 1,
                totalSpent : state.totalSpent +  parseInt(action.price),
                expenses : state.expenses.concat(expense)
            }
        case actions.DELETE_EXPENSE:
            // console.log('id ' + action.id)
            return {
                expenses : [...state.expenses].filter(x => x.id !== action.id),
                totalSpent : state.totalSpent - action.price,
                totalExpenses : state.totalExpenses - 1
            }
        case actions.EDIT_EXPENSE:
            const expenses = [...state.expenses]
            let index = expenses.findIndex(exp=> exp.id == action.id)
            const priceDifference = action.expenseData.price - expenses[index].price
            expenses[index] = action.expenseData
            return {
                ...state,
                expenses : [...expenses],
                totalSpent : state.totalSpent + priceDifference,
            }
        default:
            return state
    }
}

export default reducer
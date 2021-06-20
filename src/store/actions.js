import * as actionTypes from './actionTypes'

export const addExpense = (expenseData) => {
    // console.log(expenseData)
    return {
        type : actionTypes.ADD_EXPENSE,
        title : expenseData.title,
        description : expenseData.description,
        price : expenseData.price,
        category : expenseData.category,
        date : expenseData.date
    }
}
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'
export const EDIT_EXPENSE = 'EDIT_EXPENSE'

export const addExpense = (expenseData) => {
    return {
        type : ADD_EXPENSE,
        title : expenseData.title,
        description : expenseData.description,
        price : expenseData.price,
        category : expenseData.category,
        date : expenseData.date
    }
}
import * as actionTypes from './actionTypes'

export const addExpense = (expenseData) => {
    // console.log(expenseData)
    return {
        id : new Date().getMilliseconds(),
        type : actionTypes.ADD_EXPENSE,
        title : expenseData.title,
        description : expenseData.description,
        price : expenseData.price,
        category : expenseData.category,
        date : expenseData.date
    }
}

export const deleteExpense = (id, price) => {
    return {
        type : actionTypes.DELETE_EXPENSE,
        id : id,
        price : price,
    }
}

export const editExpense = expenseData => {
    return {
        type : actionTypes.EDIT_EXPENSE,
        id : expenseData.id,
        expenseData : expenseData
    }
}
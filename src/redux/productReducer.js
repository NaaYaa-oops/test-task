import {ADD_PRODUCT, CURRENT_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCT} from './types'


const initialState = {
    products: [],
    current: {}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {...state, products: [...action.payload]}
        case DELETE_PRODUCT:
            const productId = action.payload
            return {...state, products: state.products.filter(prod => prod.id !== +productId)}
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case CURRENT_PRODUCT:
            return {...state, current: {...state.current, ...action.payload}}
        case EDIT_PRODUCT:
            return {
                ...state, products: state.products.map(e => {
                    if (e.id === state.current.id) {
                        return e = state.current
                    }
                    return e
                })
            }
        default:
            return state
    }
}
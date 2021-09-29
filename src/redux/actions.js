import {ADD_PRODUCT, CURRENT_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCT, LOGIN} from './types'
import axios from 'axios'


const URL = process.env.REACT_APP_DB_URL

export function login(newUser) {
    return {
        type: LOGIN,
        payload: newUser
    }
}

export function deleteProduct(data) {
    return async dispatch => {
        const key = await axios.get(`${URL}/cards.json`)
            .then(response => Object.keys(response.data).map(key => {
                return {...response.data[key], key: key}
            }))
            .then(res => res.filter(el => el.id === data))
            .then(resp => resp[0])
        await axios.delete(`${URL}/cards/${key.key}.json`)

        dispatch({type: DELETE_PRODUCT, payload: data})
    }
}

export function addProduct(product) {
    return async dispatch => {
        await axios.post(`${URL}/cards.json`, product)
            .then(response => {
                dispatch({type: ADD_PRODUCT, payload: product})
            })
    }
}

export function fetchProduct() {
    return async dispatch => {
        const products = await axios.get(`${URL}/cards.json`)
            .then(response => Object.keys(response.data).map(key => {
                return response.data[key]
            }))
            .then(data => data)

        dispatch({type: FETCH_PRODUCT, payload: products})
    }
}

export function current(currentEl) {
    return async dispatch => {
        const key = await axios.get(`${URL}/cards/.json`)
            .then(response => Object.keys(response.data).filter(key => {
                if (response.data[key].id === currentEl.id) {
                    return response.data[key]
                }
            }))
            .then(resp => resp[0])

        await axios.patch(`${URL}/cards/${key}.json`, currentEl)
        dispatch({type: CURRENT_PRODUCT, payload: currentEl})
    }
}

export function edit() {
    return {
        type: EDIT_PRODUCT
    }
}
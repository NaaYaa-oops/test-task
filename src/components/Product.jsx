import React from 'react'
import '../UI/card/card.scss'
import {useDispatch} from 'react-redux'
import {current, deleteProduct} from '../redux/actions'
import {useHistory} from 'react-router-dom'


const Product = (props) => {
    const dispatch = useDispatch()
    let history = useHistory()

    const deleteHandler = (e) => {
        dispatch(deleteProduct(props.id))
    }
    const editHandler = (e) => {
        const currentElement = {...props}
        dispatch(current(currentElement))
        history.push('/product-edit')
    }
    return (
        <form className={'product-list-container'}>
            <img className={'product-list-container-img'} src={`${props.img}`} alt="product"
                 min-width={200} height={200}/>
            <h1 className={'product-list-container__title'}>{props.title}</h1>
            <span className={'product-list-container__body'}>{props.text}
                </span>
            <div className={'product-list-container__footer'}>
                <div className={'product-list-container__footer-left'}>
                    <div
                        className={'product-list-container__footer-price'}>{props.isDiscount ?
                        <strike>Price: {+props.price}</strike> : `Price: ${+props.price}`}</div>
                    <div
                        className={'product-list-container__footer-discount'}>{props.discount ? `Discount: ${+props.price - (+props.price * +props.discount / 100)} ~${props.discountTime}` : null}</div>
                </div>
                <div className={'product-list-container__footer-right'}>
                    <button className={'product-list-container__footer-button-edit'} onClick={editHandler}>edit</button>
                    <button className={'product-list-container__footer-button-remove'} onClick={deleteHandler}>remove
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Product
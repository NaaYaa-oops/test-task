import React, {useState} from 'react'
import '../UI/addCard/addCard.scss'
import {connect} from 'react-redux'
import {addProduct} from '../redux/actions'
import {useHistory} from 'react-router-dom'


const AddProduct = (props) => {
    // const dispatch = useDispatch()
    let history = useHistory()
    const initialValue = 50
    const [value, setValue] = useState({})
    const [discount, setDiscount] = useState(initialValue)
    const handler = (event) => {
        setDiscount(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.addProduct(value)
        history.push('/product-list')
    }
    const onChangeHandler = (event) => {
        setValue(prev => ({...prev, ...{[event.target.name]: event.target.value, id: Date.now()}}))
    }
    return (
        <div className={'product-add'}>
            <form className={'product-add__container'} onSubmit={submitHandler}>
                <h1>Adding Product</h1>
                <div className={'product-add__container-wrapper'}>
                    <input type="text" className={'product-add__container-wrapper__input'} id={'title'}
                           placeholder={'Enter title: '} name="title" onBlur={onChangeHandler} required min={20}
                           max={60}/>
                    <label htmlFor="name">Title</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <input type="text" className={'product-add__container-wrapper__input'} id={'body'}
                           placeholder={'Description:'} name="text" onBlur={onChangeHandler} max={200}/>
                    <label htmlFor="body">Main text</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <input type="text" className={'product-add__container-wrapper__input'} id={'img'}
                           placeholder={'Insert image link:'} name="img" onBlur={onChangeHandler} required/>
                    <label htmlFor="img">Image</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <input type="text"
                           className={'product-add__container-wrapper__input'}
                           id={'price'}
                           placeholder={'Enter price:'}
                           name="price"
                           onBlur={onChangeHandler}
                           max={99999999.99}
                           required
                    />
                    <label htmlFor="price">Price</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <input type="date" className={'product-add__container-wrapper__input'} id={'date'}
                           name="discountTime" onBlur={onChangeHandler}/>
                    <label htmlFor="date">Date</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <input type="range" min={10} max={90}
                           className={'product-add__container-wrapper__input range'}
                           id={'discount'}
                           onInput={handler}
                           name="discount"
                           onBlur={onChangeHandler}

                    />
                    <label htmlFor="{'discount'}" className={'label-range'}>Discount: {discount}</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <button type={'submit'} className={'product-add__container-wrapper__button'}>
                        Add card
                    </button>
                </div>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    addProduct
}

export default connect(null, mapDispatchToProps)(AddProduct)

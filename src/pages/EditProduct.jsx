import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {current, edit} from '../redux/actions'


const EditProduct = () => {
    const dispatch = useDispatch()
    const [discount, setDiscount] = useState(50)
    const [value, setValue] = useState()
    const product = useSelector((state) => state.products.current)
    const handler = (event) => {
        setDiscount(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(value)
        dispatch(current(value))
        dispatch(edit())
    }
    const onChangeHandler = (event) => {
        setValue(prev => ({...prev, [event.target.name]: event.target.value, id: product.id}))
    }
    return (
        <div className={'product-add'}>
            <form className={'product-add__container'} onSubmit={submitHandler}>
                <h1>Editing Product</h1>
                <div className={'product-add__container-wrapper'}>
                    <input type="text" className={'product-add__container-wrapper__input'} id={'title'}
                           placeholder={'Enter title: '} name="title" onBlur={onChangeHandler} min={20}
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
                           placeholder={'Insert image link:'} name="img" onBlur={onChangeHandler}/>
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
                           name="discount"
                           onBlur={onChangeHandler}
                           onInput={handler}

                    />
                    <label htmlFor="{'discount'}" className={'label-range'}>Discount: {discount}</label>
                </div>
                <div className={'product-add__container-wrapper'}>
                    <button type={'submit'} className={'product-add__container-wrapper__button'}>
                        Edit Card
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
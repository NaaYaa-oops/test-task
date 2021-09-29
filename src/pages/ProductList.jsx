import React, {useEffect} from 'react'
import '../UI/card/card.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProduct} from '../redux/actions'
import Product from '../components/Product'
import Loader from '../components/Loader'


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    if (!products.length) {
        return <Loader/>
    }
    return (
        <div className={'list'}>
            {products.map(e =>
                <Product
                    {...e}
                    key={e.id}
                />)}
        </div>
    )
}

export default ProductList
import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import {connect} from 'react-redux'
import AddProduct from './pages/AddProduct'
import Navbar from './components/Navbar'
import EditProduct from './pages/EditProduct'


const URL = process.env.REACT_APP_DB_URL

function App({auth}) {
    const el = localStorage.getItem('logged')
    return (
        <div className="App">
            <Switch>
                <Route path={'/login'} exact>
                    {!auth[0] && !el ? <Login/> : <Redirect to={'/product-list'}/>}
                </Route>
                <Route path={'/product-list'} exact>
                    {!auth[0] && !el ? <Redirect to={'/login'}/> : <Redirect to={'/product-list'}/>}
                    <Navbar/>
                    <ProductList/>
                </Route>
                <Route path={'/product-add'} exact>
                    {!auth[0] && !el ? <Redirect to={'/login'}/> : <Redirect to={'/product-add'}/>}
                    <Navbar/>
                    <AddProduct/>
                </Route>
                <Route path={'/product-edit'} exact>
                    {!auth[0] && !el ? <Redirect to={'/login'}/> : <Redirect to={'/product-edit'}/>}
                    <Navbar/>
                    <EditProduct/>
                </Route>
                {/*{console.log(!auth[0] && !el ? '/login' : '/product-list')}*/}
                <Redirect to={!auth[0] && !el ? '/login' : '/product-list'} from={'*'}/>
            </Switch>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.login.users,
        addCard: state.products
    }
}

export default connect(mapStateToProps)(App)

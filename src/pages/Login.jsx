import React, {useRef} from 'react'
import '../UI/login/login.scss'
import {login} from '../redux/actions'
import {connect} from 'react-redux'
import {initializeApp} from 'firebase/app'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'


const firebaseConfig = {
    apiKey: 'AIzaSyDNDsaaw0AGp_kwRp1v2eXj4dHCTifLhzQ',
    authDomain: 'test-task-d2c60.firebaseapp.com',
    databaseURL: 'https://test-task-d2c60-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'test-task-d2c60',
    storageBucket: 'test-task-d2c60.appspot.com',
    messagingSenderId: '990027075395',
    appId: '1:990027075395:web:78ef15dc141d91e92669f6'
}
initializeApp(firebaseConfig)

const Login = (props) => {
    const auth = getAuth()
    let user = null
    const inputs = {
        email: useRef(),
        password: useRef()
    }
    const loggIn = useRef(false)
    const validation = (elem) => {
        return (elem.email.current.value.length >= 6) && ((elem.password.current.value.length >= 6))
    }
    const validationError = (elem) => {
        elem.email.current.classList.add('error')
        elem.password.current.classList.add('error')
        setTimeout(() => {
            elem.email.current.classList.remove('error')
            elem.password.current.classList.remove('error')
        }, 2000)
    }
    const loginHandler = (e) => {
        e.preventDefault()
        if (validation(inputs)) {
            loggIn.current = true
            const newUser = {
                email: inputs.email.current.value,
                password: inputs.password.current.value,
                isAuth: loggIn.current
            }
            signInWithEmailAndPassword(auth, newUser.email, newUser.password)
                .then(cred => {
                    user = cred.user
                    props.login(newUser)
                    localStorage.setItem('logged', user.uid)
                })
                .catch((e) => {
                    validationError(inputs)
                })
        }
    }
    return (
        <form action="" className={'login-form'} onSubmit={loginHandler}>
            <input type={'email'}
                   ref={inputs.email}
                   className={'login-form__email'}
                   placeholder={'Enter login'}
                   min={6}
                   required
            />
            <input type={'password'}
                   ref={inputs.password}
                   className={'login-form__password'}
                   placeholder={'Enter password'}
                   min={6}
                   required
            />
            <button type={'submit'} className={'login-form__submit'}>Log in</button>
        </form>
    )
}

const mapDispatchToProps =
    {
        login
    }
const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
import React from 'react'


const Loader = () => {
    return (
        <div className="spinner-border text-dark position-absolute top-50 start-50" role="status"
             style={{width: '7rem', height: '7rem'}}>
            <span className="visually-hidden"></span>
        </div>
    )
}

export default Loader
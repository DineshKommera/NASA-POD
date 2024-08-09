import React from 'react'

export default function Footer(props) {

    const {showModal, handleDisplayModal, showData} = props

    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h1>POD PROJECT</h1>
                <h2>{showData?.title}</h2>
            </div>
            <button onClick={() => {
                handleDisplayModal()
            }}>
                {!showModal && (
                    <i className="fa-solid fa-circle-info"></i>
                )}
                
            </button>
        </footer>
    )
}

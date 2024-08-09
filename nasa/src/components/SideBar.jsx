import React from 'react'

export default function SideBar(props) {

    const {showModal, handleDisplayModal, showData} = props

    return (
        <div className='sidebar'>
            <div className='bgOverlay'></div>
            <div className='sidebarContents'>
                <h2>{showData?.title}</h2>
                <div className='descriptionContainer'>
                    <p className='dateLabel'>{showData?.date}</p>
                    <p className='descriptionLabel'>{showData?.explanation}</p>
                </div>
                <button className='closeOverlay' onClick={() => {
                    handleDisplayModal()
                }}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

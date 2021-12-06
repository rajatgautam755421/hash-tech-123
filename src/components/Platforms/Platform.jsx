import React from 'react'
import './Platform.css'

const Platform = ({ image, name }) => {
    return (
        <>
            <div className="platform__main container-fluid">
                <h3>{name}</h3>
                <img src={image} alt="" srcset="" style={{ width: "150px", height: "150px", marginLeft: "auto", marginRight: "auto", marginTop: "10px", }} />

            </div>

        </>
    )
}

export default Platform

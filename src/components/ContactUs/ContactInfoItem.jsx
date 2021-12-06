import React from 'react'
import './ContactItemInfo.css'

const ContactInfoItem = ({ Icon, text, value }) => {
    return (
        <>
            <div className="location">
                <Icon className="contactinfo__icon" />
                <h2 className="contactinfo__text">{text}</h2>

            </div>
            <h3 className="contactInfo__address">{value}</h3>
        </>
    )
}

export default ContactInfoItem

import React from 'react'
import './AboutUsCard.css'
import { Card } from 'react-bootstrap'

const AboutUsCard = ({ image, description }) => {
    return (
        <>
            <Card className="aboutus__card__main  justify-content-center">
                <img src={image} alt="AboutUsCard" className="card__main__image" />
                <Card.Body className="card__body">
                    <Card.Text className="aboutus__card__text">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default AboutUsCard

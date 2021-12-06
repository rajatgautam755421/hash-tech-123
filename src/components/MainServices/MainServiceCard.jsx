import React from 'react'
import { Card } from 'react-bootstrap'
import './MainServiceCard.css'
const MainServiceCard = ({ id, image, title, desc }) => {
    return (
        <>
            <div className="container">
                <Card className="Card__main">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        <Card.Text className="Card__main__desc">
                            {desc}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>



        </>
    )
}

export default MainServiceCard

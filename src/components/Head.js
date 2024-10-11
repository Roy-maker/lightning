import React from 'react'
import Card from 'react-bootstrap/Card';
import img1 from '../images/IMGEJP.JPG';

function Head() {
    return (
        <Card className="text-white">
            <Card.Img src={img1} alt="Card image"/>
            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center h-100">
                <Card.Title style={{fontSize:'45px'}}>Interpararrayos</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>    
            </Card.ImgOverlay>
        </Card>
    )
}

export default Head
import React, { useRef } from 'react';
import './css/CarouselProt.css';

import img1 from '../images/logo.jpeg';
import { Carousel, Container, Button } from "react-bootstrap"; //Boostrap Imports

function CarouselProt() {
    //UseRef es muy util para poder controlar y darle nuestro propio estilo al carusel de React Boostrap
    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return (
        <Container style={{ marginTop: '30px', marginBottom: '30px', padding: '0px' }}>
            <Carousel interval={null} ref={ref} controls={false} style={{ borderRadius: '15px' }}>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '60vh', borderRadius: '15px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start">
                        <h5>Residencial</h5>
                        <p style={{margin: '0px'}}>Protección para tu hogar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '60vh', borderRadius: '15px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start">
                        <h5>Comercial</h5>
                        <p>Atención a centro comerciales y escuelas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '60vh', borderRadius: '15px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start">
                        <h5>Industrial</h5>
                        <p>Atención a Plantas Industriales</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '60vh', borderRadius: '15px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start">
                        <h5>Torres de telecomunicaciones</h5>
                        <p>Atención a sistemas de comunicación</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '60vh', borderRadius: '15px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start">
                        <h5>Paneles Solares</h5>
                        <p>Atención a plantas industriales, comerciales y residenciales</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Botones Prev y Next debajo del Carousel */}
            <div className="carousel-buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Button variant="primary" onClick={onPrevClick} style={{ padding: '10px 20px', fontSize: '12px' }}>
                    &lt;
                </Button>
                <Button variant="primary" onClick={onNextClick} style={{ padding: '10px 20px', fontSize: '12px' }}>
                    &gt;
                </Button>
            </div>
        </Container>
    )
}

export default CarouselProt
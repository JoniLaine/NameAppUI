import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logo from '../logo/logo.png';
import Button from '../Button/Button';

const Header = () => {

    return (
        <Container>
            <Row xs={1} md={1} lg={2}>
                <Col lg={3}>
                    <Image src={logo} fluid />
                </Col>
                <Col lg={{ span: 7, offset: 2 }}>
                    NameApp 2021
                    <Button  page="/NamePage" onClick={() => window.location.reload(false)} text="Clear"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;


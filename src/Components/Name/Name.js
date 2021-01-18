import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';
import Button from '../Button/Button';
import '../App/App.css';

//default NamePage

const Name = () => {

  return(
    <div>
        <Header />
        <Container>
            <Row xs={1} md={1} lg={1}>
                <Col>
                    <h1>Select a function</h1>
                    <p>by clicking buttons below</p>
                </Col>
            </Row>
            <Col>
              
                <Button page="/AlphabeticalPage" text="getAllInAlphabeticalOrder"/>
                <Button page="/TotalPage" text="getTotalAmount"/>
                <Button page="/NameFormPage" text="getAmountByName"/>
                <Button page="/PopularFirstPage" text="getMostPopularFirst"/>
              
            </Col>   
        </Container>
    </div>
  )
}

  export default Name;

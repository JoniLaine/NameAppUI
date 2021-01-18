import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Button from '../Button/Button';
import axios from 'axios';
import '../App/App.css';

const baseUrl = '/name/getTotalAmount'

const Total = () => {

  const [total, setTotal] = useState([]);

  //request is sent to nameRouter and response value on set on total
  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => {
      setTotal(response.data.data)
    })
  }, [])


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
              <Button page="/" text="getTotalAmount"/>
              <Button page="/NameFormPage" text="getAmountByName"/>
              <Button page="/PopularFirstPage" text="getMostPopularFirst"/>
              
          </Col>
            <h2>Total amount:</h2>
            {/* total amount is set on the page*/}
            <h3>{total.amount}</h3>
      </Container>
    </div>
  )
}

  export default Total;
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Button from '../Button/Button';
import axios from 'axios';
import '../App/App.css';

const baseUrl = '/name/getTotalAmount'

const TotalPage = () => {

  const [total, setTotal] = useState([]);

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
            <tr>
              <th><Button page="/AlphabeticalPage" text="getAllInAlphabeticalOrder"/></th>
              <th><Button page="/" text="getTotalAmount"/></th>
              <th><Button page="/NameFormPage" text="getAmountByName"/></th>
              <th><Button page="/PopularFirstPage" text="getMostPopularFirst"/></th>
            </tr>   
          </Col>
            <h2>Total amount:</h2>
            <h3>{total.amount}</h3>
      </Container>
    </div>
  )
}

  export default TotalPage;
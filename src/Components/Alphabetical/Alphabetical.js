import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Table from 'react-bootstrap/Table';
import '../App/App.css';
import axios from 'axios';

const baseUrl = '/name/getAllInAlphabeticalOrder';

const Alphabetical = () => {

  const [names, setNames] = useState([]);

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => {
      setNames(response.data.data)
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
               
                  <Button page="/" text="getAllInAlphabeticalOrder"/>
                  <Button page="/TotalPage" text="getTotalAmount"/>
                  <Button page="/NameFormPage" text="getAmountByName"/>
                  <Button page="/PopularFirstPage" text="getMostPopularFirst"/>
                
            </Col>
              <h2>All names in alphabetical order:</h2>
            <Table striped bordered size="sm">  
              <tbody>
              {names.map(name =>
                <tr key={name.name}>
                  <td><p>{name.name}</p></td>
                </tr>
              )}
              </tbody>
            </Table> 
        </Container>
    </div>
  )
}

  export default Alphabetical;

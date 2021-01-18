import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';
import Button from '../Button/Button';
import '../App/App.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const baseUrl = '/name/getMostPopularFirst'

const PopularFirst = () => {

  const [names, setNames] = useState([]);

  //request is sent to nameRouter and response data is set in response.data.data that is shown as a list
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
          
            <Button page="/AlphabeticalPage" text="getAllInAlphabeticalOrder"/>
            <Button page="/TotalPage" text="getTotalAmount"/>
            <Button page="/NameFormPage" text="getAmountByName"/>
            <Button page="/" text="getMostPopularFirst"/>
          
        </Col>
          <h2>Most popular name first:</h2>
        <Table striped bordered size="sm">  
        {/* name and amount are set on the list (Table) */}  
          <tbody>
          {names.map(name =>
            <tr key={name.name}>
              <td><p>{name.name}</p></td>
              <td><p>{name.amount}</p></td>
            </tr>
          )}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

  export default PopularFirst;

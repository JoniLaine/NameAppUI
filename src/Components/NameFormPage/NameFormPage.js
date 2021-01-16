import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import '../App/App.css';
import axios from 'axios';

const baseUrl = '/name/getAmountByName/';

const NameFormPage = () => {
    
  const { register, handleSubmit } = useForm();
  const [names, setNames] = useState([]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const nameData = data.name
    
  axios
  .get(`/name/getAmountByName/${nameData}`)
  .then(response => {
    if (response.data.data.amount === ''){
      response.data.data.amount = 0
    }
    setNames(response.data.data)
  });
}


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
                <th><Button page="/TotalPage" text="getTotalAmount"/></th>
                <th><Button page="/" text="getAmountByName"/></th>
                <th><Button page="/PopularFirstPage" text="getMostPopularFirst"/></th>
                </tr>
          </Col>
          <h2>Amount by given Name:</h2>
        <div>
          <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input className="inputName"
                type="text"
                name="name"
                placeholder="write name here"
                ref={register({
                  pattern: {
                    value: /^[A-Öa-ö]+$/i,
                  }
                })}
              />
            </div>
            <br></br>
            <button type="submit">
              Submit
            </button>
          </form>     
        </div> 
        <br></br>
        <h3>{names.name}</h3>
        <h3>{names.amount}</h3>    
      </Container>
    </div>
  )}

  export default NameFormPage;
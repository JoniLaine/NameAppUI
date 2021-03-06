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

const NameForm = () => {
    
  const { register, handleSubmit } = useForm();
  const [names, setNames] = useState([]);

  //when clicking the submit button onSubmit takes textfield value (name) as a parameter and sets it on nameData variable
  const onSubmit = (data, e) => {
    e.preventDefault();
    const nameData = data.name
    
  //request is send to nameRouter with given name
  axios
  .get(`/name/getAmountByName/${nameData}`)
  .then(response => {
    //if response.data.data.amount is empty (the name is not on the list) response.data.data.amount gets a value 0
    if (response.data.data.amount === ''){
      response.data.data.amount = 0
    }
    //name and amount are set as values that are shown on the page
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
              
                <Button page="/AlphabeticalPage" text="getAllInAlphabeticalOrder"/>
                <Button page="/TotalPage" text="getTotalAmount"/>
                <Button page="/" text="getAmountByName"/>
                <Button page="/PopularFirstPage" text="getMostPopularFirst"/>
                
          </Col>
          <h2>Amount by given Name:</h2>
        <div>
          <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* ref = only letters are allowed on the textfield */}
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
        {/*  name and amount are shown on the page */}
        <h3>{names.name}</h3>
        <h3>{names.amount}</h3>    
      </Container>
    </div>
  )}

  export default NameForm;
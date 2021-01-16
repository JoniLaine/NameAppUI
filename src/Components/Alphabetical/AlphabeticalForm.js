import React from 'react';
import Table from 'react-bootstrap/Table';
import AlphabeticalPage from './AlphabeticalPage';

const AlphabeticalForm = () => {

  return (
    <div>
      <Table striped bordered hover size="sm">
        <AlphabeticalPage />
      </Table>
    </div>
  )
}

export default AlphabeticalForm;
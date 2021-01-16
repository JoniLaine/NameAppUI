import React from 'react';
import Table from 'react-bootstrap/Table';
import PopularFirstPage from './PopularFirstPage'

const PopularFirstForm = () => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <PopularFirstPage />
      </Table>
    </div>
  )
}
  
export default PopularFirstForm;
import React, { useState } from 'react'
import {Row ,Form,Nav,Navbar,Container ,Button} from 'react-bootstrap'
const Naving = ({filterbysearch}) => {
  const [searchdata,setsearchdata] =useState('');
const onSearch=()=>{
  filterbysearch(searchdata);
  setsearchdata('');
}
  return (
    <Row> 
         <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#" >
          <div className='brand-color'>مطعم ماريا للحلويات</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="اكتب عنوان الحلويات  .."
              className="mx-2"
              aria-label="بحث"
              onChange={(e)=>setsearchdata(e.target.value)}
              value={searchdata}
           
            />
            <Button onClick={()=>onSearch()} variant="outline-success">بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </Row>
  )
}

export default Naving
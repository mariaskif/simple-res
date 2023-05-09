import React from 'react'
import {Row,Button ,Col,Form,Nav,Navbar,NavDropdown,Container ,Card} from 'react-bootstrap'

const Cards = ({dataitem}) => {
  return (
    <Row>
      {
        dataitem.length >=1 ? (dataitem.map((item)=>
        {
          return (
            <Col sm="12" className="mb-3">
            <Card className="d-flex flex-row justify-space-between">
            <img className="img-item" src={item.img} />
            <Card.Body>

              <Card.Title>
                <div className='content'>
                <div className='item-title'>{item.title}</div>
                <div className='brand-color'>{item.price}</div>
                </div>
              
        
                 </Card.Title>
               <Card.Text>
                <div className='item-description'>  
                {item.description}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          )
        }) ): <p>  لا يوجد اصناف</p>
      }

  </Row>
  )
}

export default Cards
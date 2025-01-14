import { Container, Row, Col } from 'react-bootstrap'; 

import React from 'react'

const FormContainer = ({ children }) => {
  return (
    <Container>
        <Row classname="justify-content-md-center">
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer
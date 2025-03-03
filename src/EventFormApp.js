import './bootstrap.min.css';
import './bootstrap.css';

import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './style.css';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';

function EventFormApp() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const confirmationError = useRef(null);
  const progressBar = useRef(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (password !== confirmation) {
      event.preventDefault();
      event.stopPropagation();
      confirmationError.current.style.display = null;
    } else {
      confirmationError.current.style.display = 'none';
    }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    const letterMatch = (password.match(/[a-z, A-Z]/g) || []).length;
    const numberMatch = (password.match(/[0-9]/g) || []).length;
    const specialMatch = (password.match(/[#?!@$%^&*-]/g) || []).length;

    const strength = letterMatch + numberMatch * 2 + specialMatch * 3;
    progressBar.current.style.width = `${strength * 3}%`;
    let color = 'red';
    if (strength > 10) {
      color = 'orange';
    }
    if (strength > 26) {
      color = 'green';
    }
    progressBar.current.style.backgroundColor = color;
  };

  return (
    <div className='form-wrapper'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>
          Submit New Event
        </h2>
        <Container fluid>
          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <Form.Group>
                <FloatingLabel controlId='firstnamLabel' label='First name'>
                  <Form.Control type='text' placeholder='First name' required />
                </FloatingLabel>
                <Form.Control.Feedback type='invalid'>
                  Do not leave empty
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='lastnameLabel' label='Last name'>
                <Form.Control type='text' placeholder='Last name' required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <Form.Group controlId='formBasicEmail'>
                <FloatingLabel controlId='emailLabel' label='Enter email'>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    required
                    pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventnameLabel' label='Event name'>
                <Form.Control type='text' placeholder='Event name' required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <Form.Group className='mb-3' controlId='formBasicNewsletter'>
                <Form.Check
                  type='checkbox'
                  label='Sign me up for the Mob newsletter!'
                />
              </Form.Group>
             </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <Form.Group className='mb-3' controlId='formBasicFollow'>
                <Form.Check
                  type='checkbox'
                  label='I agree to the Terms & Conditions'
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant='primary' type='submit'>
            Register
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default EventFormApp;

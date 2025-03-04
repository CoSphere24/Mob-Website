import './bootstrap.min.css';
import './bootstrap.css';

import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './style.css';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
//import TimePicker from 'react-time-picker';
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';

//const [value, setValue] = useState(new Date());

import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import 'rc-time-picker/assets/index.css';


function EventFormApp() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const confirmationError = useRef(null);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [timeValue, onTimeChange] = useState('10:00');

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  

  return (
    <div className='form-wrapper'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>
          Submit New Event
        </h2>
        <br/><br/>
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
              <FloatingLabel controlId='eventStartDateLabel' label='Event start date'>
                <DatePicker 
                  selectsStart
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  className="form-control"
                  wrapperClassName="form-control"
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventEndDateLabel' label='Event end date'>
                <DatePicker
                  selectsEnd
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  endDate={endDate}
                  startDate={startDate}
                  minDate={startDate}
                  className="form-control"
                  wrapperClassName="form-control"
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventStartTimeLabel' label='Event start time'>
                <DateTimePicker
                  onTimeChange={onTimeChange} timeValue={timeValue}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventEndTimeLabel' label='Event end time'>
                <TimePicker 
                  style={{ width: 100, display: "block" }}
                  showSecond={false}
                  timeValue={timeValue}
                  use12Hours
                  onTimeChange={onTimeChange}
                />
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

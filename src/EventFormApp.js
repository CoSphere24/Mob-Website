import './bootstrap.min.css';
import './bootstrap.css';

import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './style.css';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';

import "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/js/bootstrap-datetimepicker.min.js";

import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/css/bootstrap-datetimepicker.min.css";


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
                <TimePicker
                  onTimeChange={onTimeChange} timeValue={timeValue}
                  format='hh:mm a'
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventEndTimeLabel' label='Event end time'>
                <TimePicker
                  onTimeChange={onTimeChange} timeValue={timeValue}
                  format='hh:mm a'
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventStartTimeLabel' label='Event start time'>
                <div className='input-group date' id='datetimepicker1'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                  </span>
                </div>
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='eventEndTimeLabel' label='Event end time'>
                <div className='input-group date' id='datetimepicker1'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                  </span>
                </div>
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

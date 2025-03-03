import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import FormApp from './FormApp';
import './bootstrap.min.css';
import './bootstrap.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './style.css';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';

//const domNodeForm = document.getElementById('formapp');
//const rootForm = createRoot(domNodeForm);
//rootForm.render(<FormApp />);

const SubmitEvent = () => (
      <div className='SubmitEvent'>
        <section class="bg-texture hero">
        </section>
            <FormApp/>
      </div>
    );

export default SubmitEvent;

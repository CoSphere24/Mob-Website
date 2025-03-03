import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import FormApp from './FormApp';

const domNodeForm = document.getElementById('formapp');
const rootForm = createRoot(domNodeForm);
rootForm.render(<FormApp />);

const SubmitEvent = () => (
      <div className='SubmitEvent' id='formapp'>
      </div>
    );

export default SubmitEvent;

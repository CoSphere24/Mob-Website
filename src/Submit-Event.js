import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import FormApp from './FormApp';

const domNode = document.getElementById('formapp');
const root = createRoot(domNode);
root.render(<FormApp />);

const Submit-Event = () => (
      <div className='Submit-Event' id='formapp'>
      </div>
    );

export default Submit-Event;

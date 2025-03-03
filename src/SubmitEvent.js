import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import EventFormApp from './EventFormApp';
import './bootstrap.min.css';
import './bootstrap.css';

const SubmitEvent = () => (
      <div className='SubmitEvent'>
            <section class="bg-light">
                  <div class="container">
                        <EventFormApp/>
                  </div>
            </section>
      </div>
    );

export default SubmitEvent;

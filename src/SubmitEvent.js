import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import EventFormApp from './EventFormApp';
import './bootstrap.min.css';
import './bootstrap.css';

const SubmitEvent = () => (
      <div className='SubmitEvent'>
            <section style="background-color:orange;"></section>
            <section class="bg-light">
                  <br/><br/>
                  <div class="container">
                        <EventFormApp/>
                  </div>
            </section>
      </div>
    );

export default SubmitEvent;

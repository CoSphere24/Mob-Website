import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import SignupFormApp from './SignupFormApp';
import './bootstrap.min.css';
import './bootstrap.css';

const Signup = () => (
      <div className='Signup'>
        <section class="bg-texture hero">
        </section>
            <div class="container">
                  <SignupFormApp/>
            </div>
      </div>
    );

export default Signup;

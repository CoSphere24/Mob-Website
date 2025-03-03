import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import FormApp from './FormApp';

const domNode = document.getElementById('formapp');
const root = createRoot(domNode);
root.render(<FormApp />);

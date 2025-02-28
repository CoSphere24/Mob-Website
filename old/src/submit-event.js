import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import FormApp from './FormApp';

//function NavigationBar() { //testing
  // TODO: Actually implement a navigation bar
//  return <h1>Hello from React!</h1>;
//}

const domNode = document.getElementById('formapp');
const root = createRoot(domNode);
root.render(<FormApp />);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <FormApp />
//  </React.StrictMode>
//);

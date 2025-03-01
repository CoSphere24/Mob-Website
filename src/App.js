    import React from 'react';
    import './bootstrap.css';
    import './bootstrap.min.css';
    import './App.css';
    import './_custom.scss';
    import './_variables.scss';
    import { NavLink, Routes, Route } from 'react-router-dom';
    import Blogs from './Blogs';

    const App = () => (
      <div className='app'>
        <h1>React Router Demo</h1>
        <Navigation />
        <Main />
      </div>
    );

    const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/blogs'>Blogs</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    );

    const Home = () => (
      <div className='home'>
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
      </div>
    );

    const Contact = () => (
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
      </div>
    );

    const Main = () => (
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/blogs' element={<Blogs/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    );


    export default App;


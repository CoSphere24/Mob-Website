    import React from 'react';
    import './_variables.scss';
    import './_custom.scss';
    import './bootstrap.css';
    import './bootstrap.min.css';
    import './App.css';
    import { NavLink, Routes, Route } from 'react-router-dom';
    import Home from './Home';
    import Blogs from './Blogs';
    import Submit-Event from './Submit-Event';
    //import * from './scripts';

    const App = () => (
      <div className='app'>
        <Navigation />
        <Main />
      </div>
    );

    const Navigation = () => (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top sticky-navigation">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="ion-grid icon-sm"></span>
            </button>
            <a class="navbar-brand hero-heading" href="https://findyourmob.netlify.app/">Mob</a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-3">
                        <a class="nav-link page-scroll" href="#product">Product</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link page-scroll" href="#partners">Partners</a>
                    </li>
                    <li class="nav-item mr-3">
                        <NavLink exact activeClassName="current" to='/blogs'><a class="nav-link page-scroll">Blogs</a></NavLink>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
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
        <Route exact path='/submit-event' element={<Submit-Event/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    );


    export default App;


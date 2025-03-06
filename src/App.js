    import React, { useEffect } from 'react';
    import './_variables.scss';
    import './_custom.scss';
    import './bootstrap.css';
    import './bootstrap.min.css';
    import './App.css';
    import { NavLink, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
    import Home from './Home';
    import Blogs from './Blogs';
    import SubmitEvent from './SubmitEvent';
    import WOW from 'wowjs';

    const App = () => {
        const location = useLocation();

        // Handle smooth scroll when hash in the URL changes
        useEffect(() => {
            const hash = location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust to offset navbar height
                        behavior: 'smooth', // Smooth scroll effect
                    });
                }
            }
        }, [location]); // Listen to hash changes in the URL
    
        return (
            <div className='app'>
                <Navigation />
                <Main />
            </div>
        );
    };
    
    const Navigation = () => (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top sticky-navigation">
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="ion-grid icon-sm"></span>
            </button>
            <a className="navbar-brand hero-heading" href="https://findyourmob.netlify.app/">Mob</a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#product">
                            Product
                        </a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#features">
                            Features
                        </a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#pricing">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#partners">
                            Partners
                        </a>
                    </li>
                    <li className="nav-item mr-3">
                        <NavLink exact activeClassName="current" to="/blogs">
                            <a className="nav-link page-scroll">Blogs</a>
                        </NavLink>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#contact">
                            Contact
                        </a>
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
        <Route exact path='/submit-event' element={<SubmitEvent/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    );


    export default App;


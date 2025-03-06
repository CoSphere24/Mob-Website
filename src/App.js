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
        const navigate = useNavigate(); // Initialize navigate here
    
        // Smooth scrolling effect for anchors (in case the URL changes directly)
        useEffect(() => {
            const hash = location.hash; // Check the URL hash
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth', // Ensure smooth scroll
                    });
                }
            }
        }, [location]); // When location changes (e.g., URL hash), trigger smooth scroll
    
        return (
            <div className='app'>
                <Navigation navigate={navigate} /> {/* Pass navigate prop */}
                <Main />
            </div>
        );
    };
    
    const Navigation = ({ navigate }) => {
        useEffect(() => {
            const navLinks = document.querySelectorAll('.page-scroll');
    
            navLinks.forEach((link) => {
                link.addEventListener('click', function (e) {
                    e.preventDefault(); // Prevent default navigation behavior
    
                    const targetId = this.getAttribute('href').slice(1); // Get the target section id
                    const targetElement = document.getElementById(targetId);
    
                    if (targetElement) {
                        // Trigger smooth scrolling
                        window.scrollTo({
                            top: targetElement.offsetTop - 50, // Offset to account for navbar height
                            behavior: 'smooth',
                        });
    
                        // Manually update the URL to reflect the hash
                        navigate(`#${targetId}`);
                    }
                });
            });
    
            // Cleanup event listeners when the component unmounts
            return () => {
                navLinks.forEach((link) => {
                    link.removeEventListener('click', () => {});
                });
            };
        }, [navigate]);
    
        return (
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
                <a className="navbar-brand hero-heading" href="https://findyourmob.netlify.app/">
                    Mob
                </a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link page-scroll" to="#product">
                                Product
                            </NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link page-scroll" to="#features">
                                Features
                            </NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link page-scroll" to="#pricing">
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link page-scroll" to="#partners">
                                Partners
                            </NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink exact activeClassName="current" to="/blogs">
                                <a className="nav-link page-scroll">Blogs</a>
                            </NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link page-scroll" to="#contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };

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


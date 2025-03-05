    import React, { useEffect } from 'react';
    import './_variables.scss';
    import './_custom.scss';
    import './bootstrap.css';
    import './bootstrap.min.css';
    import './App.css';
    import { NavLink, Routes, Route } from 'react-router-dom';
    import Home from './Home';
    import Blogs from './Blogs';
    import SubmitEvent from './SubmitEvent';
    import WOW from 'wowjs';

    const App = () => {
        useEffect(() => {
            // Initialize WOW.js animations
            new WOW.WOW().init();
        
            // Handle scroll events for sticky navigation and other behaviors
            const handleScroll = () => {
              const secondFeature = document.getElementById('features')?.offsetTop || 0;
              const scroll = window.scrollY;
        
              // Handle sticky navigation background color change
              const stickyNav = document.querySelector('.sticky-navigation');
              if (scroll >= 150) {
                stickyNav.style.backgroundColor = '#ff7842';
              } else {
                stickyNav.style.backgroundColor = 'transparent';
              }
        
              // Handle background position change for mobile screen when reaching second feature
              if ( document.querySelector('.mobileScreen') ) {
                  const mobileScreen = document.querySelector('.mobileScreen');
                  if (scroll >= secondFeature - 200) {
                      mobileScreen.style.backgroundPosition = 'center top';
                  }
              };
            };
        
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
        
            // Cleanup on unmount
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
        
          const handlePageScroll = (event, target) => {
            event.preventDefault();
            const targetElement = document.querySelector(target);
            window.scrollTo({
              top: targetElement.offsetTop - 50, // Adjust for offset
              behavior: 'smooth',
            });
          };
        
          return (
            <div className='app'>
              <Navigation handlePageScroll={handlePageScroll} />
              <Main />
            </div>
          );
      //<div className='app'>
      //  <Navigation />
      //  <Main />
      //</div>
    };

    const Navigation = ({ handlePageScroll }) => (
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
                  <a
                    className="nav-link page-scroll"
                    href="#product"
                    onClick={(e) => handlePageScroll(e, '#product')}
                  >
                    Product
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="nav-link page-scroll"
                    href="#features"
                    onClick={(e) => handlePageScroll(e, '#features')}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="nav-link page-scroll"
                    href="#pricing"
                    onClick={(e) => handlePageScroll(e, '#pricing')}
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="nav-link page-scroll"
                    href="#partners"
                    onClick={(e) => handlePageScroll(e, '#partners')}
                  >
                    Partners
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <NavLink exact activeClassName="current" to="/blogs">
                    <a className="nav-link page-scroll">Blogs</a>
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="nav-link page-scroll"
                    href="#contact"
                    onClick={(e) => handlePageScroll(e, '#contact')}
                  >
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


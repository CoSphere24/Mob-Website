    import React from 'react';
    import './_variables.scss';
    import './_custom.scss';
    import './bootstrap.css';
    import './bootstrap.min.css';
    import './App.css';
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
        <nav class="navbar navbar-expand-md navbar-dark fixed-top sticky-navigation">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="ion-grid icon-sm"></span>
            </button>
            <a class="navbar-brand hero-heading" href="https://findyourmob.netlify.app/">Mob</a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-3">
                        <NavLink exact className="nav-link page-scroll" activeClassName="current" to='#product'>Product</NavLink>
                    </li>
                    <li class="nav-item mr-3">
                        <NavLink exact className="nav-link page-scroll" activeClassName="current" to='#features'>Features</NavLink>
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
      //<nav>
      //  <ul>
      //    <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      //    <li><NavLink exact activeClassName="current" to='/blogs'>Blogs</NavLink></li>
      //    <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
      //  </ul>
      //</nav>
    );

    const Home = () => (
      <div className='home'>
        <section class="bg-texture hero" id="main">
            <div class="container">
                <div class="row d-md-flex brand">
                    <div class="col-md-6 hidden-sm-down wow fadeIn">
                        <img class="img-fluid mx-auto d-block" src="https://cdn3d.iconscout.com/3d/premium/thumb/camera-3d-icon-download-in-png-blend-fbx-gltf-file-formats--dslr-digital-photography-photo-device-summer-holiday-pack-holidays-icons-5058701.png"/>
                    </div>
                    <div class="col-md-6 col-sm-12 text-white wow fadeIn">
                        <h2 class="pt-4">This is <b class="text-primary-light">not </b> a dating app.</h2>
                        <p class="mt-5">
                            We're tired of apps that don't connect us the way we want to, and we think you are too.
                        </p>
                        <p class="mt-5">
                            <a href="#download" class="btn btn-primary mr-2 mb-2 page-scroll">Try the Beta</a>
                            <a href="#features" class="btn btn-white mb-2 page-scroll">Learn More</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
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


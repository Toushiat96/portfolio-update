import React from 'react';
import './Navber.css'
const Navber = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand ml-5 mt-3 text-white" href="/"><h1>Toushiat</h1></a>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item mr-3">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-white" href="/project">Projects</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-white" href="blogs">Blogs</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-white" href="/about">About</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-white" href="/skill">Skill</a>
                    </li>
                    
                    <li className="nav-item mr-3">
                        <a className="nav-link text-white" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="https://drive.google.com/file/d/178bZAdaZrq07_XGJBtWswfHBlZ9VGvr5/view?usp=sharing" target="_blank"><button type="button" class="btn btn-outline-light">Resume</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navber;
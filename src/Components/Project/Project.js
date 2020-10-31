import React from 'react';
import Navber from '../Home/Navber/Navber';
import project1 from '../../images/volunter.PNG'
import project2 from '../../images/travel-lover.png'
import project3 from '../../images/onee.PNG'
import project4 from '../../images/hard.PNG'
import project5 from '../../images/panda.PNG'
import project6 from '../../images/eschool1.PNG'
import './Project.css'

const Project = () => {
    return (
        <div className="bg-main1">
            <Navber></Navber>
            <div className="container mt-5">
            <h2 className="text-center text-white"> Projects</h2>
            <div className="row p-5">
            <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={project1} alt="Card image cap"/>
            <div class="card-body text-center">
                  <h5 class="card-title">Volunteer Work</h5>
                  <p class="card-text"> This project is about volunteer activites. Any person can add volunteer activity. In this project admin can add or delete any activity.</p>
                  <a href="https://github.com/Toushiat96/vounteer-client" class="mr-3 btn btn-dark">GitHub</a>
                  <a href="https://volunteer-work-f51a7.web.app/home" class="ml-3 btn btn-dark">Website</a>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={project2} alt="Card image cap"/>
            <div class="card-body text-center">
                  <h5 class="card-title">Travel Lover</h5>
                  <p class="card-text"> Any Travel lover person can book his/her choice place which is shown in homepage.To book hotel or any place he/she first should be logged using gmail.He can see how many hotels .</p>
                  <a href="https://github.com/Toushiat96/travel-lover" class="mr-3 btn btn-dark">GitHub</a>
                  <a href="https://travel-lover-fe8f6.web.app/home" class="ml-3 btn btn-dark">Website</a>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={project3} alt="Card image cap"/>
            <div class="card-body text-center">
                  <h5 class="card-title"> Online Education</h5>
                  <p class="card-text"> This project is online education based project  .</p>
                  <a href="https://github.com/Toushiat96/online-education" class="mr-3 btn btn-dark">GitHub</a>
                  <a href="https://online-course-udemy.netlify.app/" class="ml-3 btn btn-dark">Website</a>
                </div>
            </div>
            </div>
            
            </div>
            <div className="row p-5">
            <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={project4} alt="Card image cap"/>
            <div class="card-body text-center">
                  <h5 class="card-title"> Hard Rock</h5>
                  <p class="card-text"> This project is API based. Any can search any songs lyrics from here  .</p>
                  <a href="https://github.com/Toushiat96/hard-rock" class="mr-3 btn btn-dark">GitHub</a>
                  <a href="https://toushiat96.github.io/hard-rock/" class="ml-3 btn btn-dark">Website</a>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={project5} alt="Card image cap"/>
            <div class="card-body text-center">
                  <h5 class="card-title"> Panda E-Commerce</h5>
                  <p class="card-text">Simple panda e commerce site . Here display different types of products.Any one can by poduct from here</p>
                  <a href="https://github.com/Toushiat96/panda-commerce" class="mr-3 btn btn-dark">GitHub</a>
                  <a href="https://toushiat96.github.io/panda-commerce/" class="ml-3 btn btn-dark">Website</a>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={project6} alt="Card image cap"/>
            <div class="card-body text-center">
                  <h5 class="card-title"> E-School</h5>
                  <p class="card-text"> Online e-learning plateform. Where student can access online e book. Student can watch tutorial from this site . I think it will help for student</p>
                  <a href="https://github.com/Toushiat96/e-school" class="mr-3 btn btn-dark">GitHub</a>
                  <a href="https://toushiat96.github.io/e-school/" class="ml-3 btn btn-dark">Website</a>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Project;
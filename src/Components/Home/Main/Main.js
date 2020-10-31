
import photo from '../../../images/img1.jpg'
import './Main.css'
import Typical from 'react-typical'
import { FaGithubSquare } from 'react-icons/fa';
import {  AiFillLinkedin} from 'react-icons/ai';
const Main = () => {
    return (
        
            <div className="bg-main">
            <div style={{paddingTop:'50px'}} className="text-center">
            <img style={{height:'200px'}} className="img-fluid" src={photo} alt=""/>
            <h1 className="text-white mt-3"> Hi, I am Toushiat Shaikh </h1>
            <h3> 
           
            <Typical
        steps={['Web Developer', 3000, 'Programmer', 3000,]}
        loop={Infinity}
        wrapper ="b"
      
      />
    
            
            </h3>
            <h5 className="text-white mt-3" >I am a frontend web developer. I can provide clean code and pixel perfect design.<br/> I also make website more & more interactive with web animations.</h5>
            <div className="icon">
            <a className="icon1" href="https://github.com/Toushiat96?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
            <a className="icon1" href="https://www.linkedin.com/in/toushiat-shaikh-49009911a/" target="_blank" rel="noopener noreferrer">< AiFillLinkedin /></a>
            
            <div className="d-flex justify-content-center">
                    <a className="nav-link" href="https://drive.google.com/file/d/178bZAdaZrq07_XGJBtWswfHBlZ9VGvr5/view?usp=sharing" target="_blank"><button type="button" class="btn btn-outline-light">Get Resume</button></a>
                    <a className="nav-link" href="/about"><button type="button" class="btn btn-outline-light" >About</button></a>
                </div>
            </div>
            </div>
            </div>
        
    );
};

export default Main;
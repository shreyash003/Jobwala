import main from '../assets/images/main.svg';
import {Logo} from '../componenets';
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom';

const Landing = () =>{
  return (
  <Wrapper>
    <nav>
  <Logo />
    </nav>
    <div className="container page">
      <div className="info"><h1>job <span>Tracking</span> App</h1>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quia dolore, eius sed ea quo esse sequi officiis a! Molestiae amet quaerat accusantium sequi voluptas atque vero ea saepe illo!
      </p>
      <Link to='/register' className='btn btn-hero'>Login/Register</Link>
    </div>
    <img src={main} alt="jon hunt" className='img main-img' />
    </div>
  </Wrapper>
  )
};

export default Landing;
import './about.css';
import me from './images/about.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const About = () =>
    <div className='about'>
        <div className="image sm-12 md-6">
            <img src={me} alt='climbing image' />
        </div>

        <div className="bio sm-12 md-6">
            <p>I am a Portland, Oregon based web developer. I have a passion for making pretty things, whether it is your website or a hand knit sweater.</p>
            <p>    Over the last year, I have honed skills in HTML, CSS, Javascript, React, Node, SQL, MongoDB and much more! I might be new to the game, but I live to push my boundaries and work hard!</p>
            <p> Take a look around if you like what you see, let's chat!</p>
        </div>
    </div>

export default About;
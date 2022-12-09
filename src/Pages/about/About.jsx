import './about.css';
import me from './images/about.jpeg';


const About = () =>
    <div className='about d-flex'>
        <div className="image sm-12 md-6">
            <img src={me} alt='climbing image' />
        </div>

        <div className="bio sm-12 md-6">
            <p>I am a Portland, Oregon based web developer. I have a passion for making pretty things, whether it is your website or a hand knit sweater.
                <br></br>
                <br></br>
                Over the last year, I have honed skills in HTML, CSS, Javascript, React, Node, SQL, MongoDB and much more!
                <br></br>
                <br></br>
                I might be new to the game, but I live to push my boundaries and work hard!</p>

            <p> Take a look around if you like what you see, let's chat!</p>
        </div>
    </div>

export default About;
import './portfolio.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import img1 from './images/coding-quiz.png';
import img2 from './images/xdream.png';
import img3 from './images/getflix.png';

const Portfolio = () => {

    const projects = [
        {
            title: 'XDream: Dream Journal',
            description: 'XDream is an online dream journal users can use to track their dreams. There is an option to make your dream public and receive feedback from other users or keep it private if you just want to track it for your own personal purposes.',
            link: 'https://www.producthunt.com/posts/project-1',
            repo: 'https://github.com/llacourciere/Xdream',
            languages: 'JavaScript, CSS, HTML, bootstrap, mySQL, nodejs, HandleBars',
            img: `${img2}`
        },
        {
            title: 'GetFlix and Chill',
            description: 'GetFlix and Chill is an app for the movie loving stoner. This app randomly generates a movie and weed pairing, for your Friday night movie nights.',
            link: 'https://apatheticjedi.github.io/get-flix-and-chill/',
            repo: 'https://github.com/apatheticjedi/get-flix-and-chill',
            languages: 'JavaScript, CSS, HTML, MD Bootstrap, JQuery',
            img: `${img3}`
        },
        {
            title: 'Coding Quiz',
            description: 'A Quiz about coding',
            link: 'https://llacourciere.github.io/coding-quiz/',
            repo: 'https://github.com/llacourciere/coding-quiz',
            languages: 'JavaScript, CSS, HTML',
            img: `${img1}`
        },

    ]

    return (
        <div className='portfolio-main'>
            <div className='card-container '>
                <div className='cardbox '>
                    {projects.map((project, i) => (
                    <Card className='sm-12 md-3 '>
                    <Card.Img className="project-image" variant="top" src={project.img}/>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>
                       {project.description}
                       <br></br>
                       <br></br>
                       Languages: {project.languages}
                      </Card.Text>
                      <div className='md-12'>
                      <Button className='repo-button' href={project.repo}>Github</Button>
                      <Button className='app-button' href={project.link}>App</Button>
                      </div>
                     
                    </Card.Body>
                  </Card>
                    ))}
                </div>
            </div>

        </div>
    )
};


export default Portfolio;
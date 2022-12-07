import './portfolio.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Portfolio = () => {

    const projects = [
        {
            title: 'XDream: Dream Journal',
            description: 'XDream is an online dream journal users can use to track their dreams. There is an option to make your dream public and receive feedback from other users or keep it private if you just want to track it for your own personal purposes.',
            link: 'https://www.producthunt.com/posts/project-1',
            repo: 'https://github.com/llacourciere/Xdream',
            languages: 'JavaScript, CSS, HTML, bootstrap, mySQL, nodejs, HandleBars',

        },
        {
            title: 'GetFlix and Chill',
            description: 'GetFlix and Chill is an app for the movie loving stoner. This app randomly generates a movie and weed pairing, for your Friday night movie nights.',
            link: 'https://apatheticjedi.github.io/get-flix-and-chill/',
            repo: 'https://github.com/apatheticjedi/get-flix-and-chill',
            languages: 'JavaScript, CSS, HTML, MD Bootstrap, JQuery'
        },
        {
            title: 'XDream: Dream Journal',
            description: 'XDream is an online dream journal users can use to track their dreams. There is an option to make your dream public and receive feedback from other users or keep it private if you just want to track it for your own personal purposes.',
            link: 'https://www.producthunt.com/posts/project-1',
            repo: 'https://github.com/llacourciere/Xdream',
            languages: 'JavaScript, CSS, HTML, bootstrap, mysql, nodejs, handlebars'
        },
        {
            title: 'XDream: Dream Journal',
            description: 'XDream is an online dream journal users can use to track their dreams. There is an option to make your dream public and receive feedback from other users or keep it private if you just want to track it for your own personal purposes.',
            link: 'https://www.producthunt.com/posts/project-1',
            repo: 'https://github.com/llacourciere/Xdream',
            languages: 'JavaScript, CSS, HTML, bootstrap, mysql, nodejs, handlebars'
        }

    ]

    return (
        <div className='portfolio-main'>
            <div className='card-container'>
                <div className='justify-content-evenly'>
                    {projects.map((project, i) => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"/>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>
                        {project.description},
                        {project.languages}
                      </Card.Text>
                      <div className='md-3'>
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
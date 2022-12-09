import Resume from "./assets/resume.pdf";
import './resume.css';

const resume = Resume

const ResumePage = () => {
    return (
        <div className="resume-container">
          <div className=" resume sm-12">
            <iframe src={resume} width="80%" height="650px"></iframe>
          </div>
          
        </div>
    )
}

export default ResumePage;
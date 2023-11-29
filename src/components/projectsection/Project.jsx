import uuid4 from "uuid4";
import './Project.scss'

const Project = ({ projectTitle , projectDescription , technologies, repo, demo }) => {
    return ( 
            <article className="projectCard">
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <div>
                    {technologies.map((tech) => (
                        <p key={uuid4()}> { tech } </p>
                    ))}
                </div>
                <div>
                <p>{demo}</p>
                <p>{repo}</p>
                </div>
            </article>
    );
}

export default Project;
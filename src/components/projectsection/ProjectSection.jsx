
import CSS from "../../assets/svg/CSS";
import HTML5 from "../../assets/svg/HTML5";
import JavaScript from "../../assets/svg/JavaScript";
import React from "../../assets/svg/React";
import Sass from "../../assets/svg/Sass";
import Tailwind from "../../assets/svg/Tailwind";
import Project from "./Project";
import './ProjectSection.scss'

const ProjectSection = () => {
    return ( 
        <section className="projectsContainer">
            <h2>PROJECTS</h2>
            <div>
            <Project
            projectTitle="Project 1"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste impedit corporis provident doloremque aut, iusto optio ut repellendus sint?"
            technologies={[<HTML5/>, <JavaScript/>, <CSS/>]}
            />
            <Project
            projectTitle="Project 2"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste impedit corporis provident doloremque aut, iusto optio ut repellendus sint?"
            technologies={[<React/>, <JavaScript/>, <Sass/>]}
            />
            <Project
            projectTitle="Project 3"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste impedit corporis provident doloremque aut, iusto optio ut repellendus sint?"
            technologies={[<React/>, <JavaScript/>, <Sass/>]}
            />
            <Project
            projectTitle="Project 4"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste impedit corporis provident doloremque aut, iusto optio ut repellendus sint?"
            technologies={[<React/>, <JavaScript/>, <Tailwind/>]}
            />
            </div>  
        </section>
    );
}

export default ProjectSection;

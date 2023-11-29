
import CSS from "../../assets/svg/CSS";
import GitHub from "../../assets/svg/GitHub";
import HTML5 from "../../assets/svg/HTML5";
import JavaScript from "../../assets/svg/JavaScript";
import Link from "../../assets/svg/Link";
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
            projectTitle="Weather_API"
            projectDescription="Built a dynamic web app using HTML5, SASS, and Javascript with OpenWeather API integration. Automatically fetches local weather for today and the next five days on page load. Users can also explore weather in other cities through a search function."
            technologies={[<HTML5/>, <JavaScript/>, <Sass/>]}
            repo= {<a href="https://github.com/NikolaSretko/Weather_API"><GitHub/></a>}
            demo={<a href="https://nikolasretko.github.io/Weather_API/"><Link/></a>}
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
            <Project
            projectTitle="Project 5"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste impedit corporis provident doloremque aut, iusto optio ut repellendus sint?"
            technologies={[<React/>, <JavaScript/>, <Sass/>]}
            />
            <Project
            projectTitle="Project 6"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste impedit corporis provident doloremque aut, iusto optio ut repellendus sint?"
            technologies={[<React/>, <JavaScript/>, <CSS/>]}
            />
            </div>  
        </section>
    );
}

export default ProjectSection;

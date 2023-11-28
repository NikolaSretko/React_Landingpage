import './Skill.scss'
const Skill = ({skill,skill2,skill3,skill4,skill5,skill6,skill7,skill8}) => {
    return ( 
        <>
        <section className='skillsContainer'>
            <h2>SKILLS</h2>
            <div className='singelSkillWrapper'>
                <a href="#">HTML</a>
                <a href="#">CSS</a>
                <a href="#" className='item3'>JavaScript</a>
                <a href="#">React</a>
                <a href="#">SASS</a>
                <a href="#" className='item6'>Tailwind CSS</a>
                <a href="#"> Git</a>
                <a href="#">UI/UX</a>
            </div>
        </section>  
        </>
    );
}

export default Skill;
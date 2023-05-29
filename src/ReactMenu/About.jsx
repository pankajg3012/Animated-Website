import React from 'react'
import page from '../Images/Softwaredev5.jpg'
import './About.css'

const About = () => {
  return (
    <>

    <div className="Mainpage">
    <div className='imgdiv'>
    <img src={page} alt=""  />
    </div>
    <p className='para'>
    Software engineering is an engineering-based approach to software development.A software engineer is a person who applies the engineering design process to design, develop, maintain, test, and evaluate computer software. The term programmer is sometimes used as a synonym, but may also refer more to implementation rather than design and can also lack connotations of engineering education or skills.

Engineering techniques are used to inform the software development process,which involves the definition, implementation, assessment, measurement, management, change, and improvement of the software life cycle process itself. It heavily uses software configuration management,which is about systematically controlling changes to the configuration, and maintaining the integrity and traceability of the configuration and code throughout the system life cycle. Modern processes use software versioning.

Beginning in the 1960s, software engineering was seen as its own type of engineering. Additionally, the development of software engineering was seen as a struggle. It was difficult to keep up with the hardware which caused many problems for software engineers. Problems included software that was over budget, exceeded deadlines, required extensive de-bugging and maintenance, and unsuccessfully met the needs of consumers or was never even completed. In 1968 NATO held the first Software Engineering conference where issues related to software were addressed: guidelines and best practices for the development of software were established
</p>
    </div>
    </>
  )
}

export default About
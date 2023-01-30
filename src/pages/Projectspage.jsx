import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../projects-data.json'

const Projectspage = () => {
    
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <div>
            <h1>PROJECTS</h1>
            {projects.map((project) => {
                return (
                    <div className='project' key={project._id}>
                        <h3><Link to={`/projects/${project._id}`}>
                            {project.name}
                        </Link>
                        </h3>
                        <p>{project.year}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Projectspage
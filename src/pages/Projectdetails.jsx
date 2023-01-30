import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from '../projects-data.json'

const Projectdetails = () => {

    const [foundProject, setFoundProject] = useState(null)

    const { projectId } = useParams()

    useEffect(() => {
        const project = projectsData.find((project) => {
            return project._id === projectId
        })

        if (project) {
            setFoundProject(project)
        }
    }, [projectId])

    return (
        <div>
            <h1>Project details</h1>

            {!foundProject && <h3>Project not found</h3>}
            

            {foundProject && (
                <>
                    <h2>{foundProject.name}</h2>
                    <h3>Tech Stack: {foundProject.technologies}</h3>
                    <p>{foundProject.description}</p>
                    <Link to="/projects">Back</Link>
                </>
            )}
        </div>
    )
}

export default Projectdetails
import {  useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import projectsData from '../projects-data.json'

const Projectdetails = () => {

    const {cart, setCart} = useContext(CartContext)

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

    const addToCart = () => {
        const projectToCart = {
            name:  foundProject.name ,
            tech: foundProject.technologies,
            desc: foundProject.description
        }
        setCart(prev => [...prev, projectToCart])
    }
    

    return (
        <div>
            <h1>Project details</h1>

            {!foundProject && <h3>Project not found</h3>}
            
            {cart.map((cafe) => {
                return (
                    <h1>{cafe.name}</h1>
                )
            })}
            {foundProject && (
                <>
                    <h2>{foundProject.name}</h2>
                    <h3>Tech Stack: {foundProject.technologies}</h3>
                    <p>{foundProject.description}</p>
                    <button onClick={()=>addToCart()}>ADD to "cart"</button>
                    <Link to="/projects">Back</Link>
                </>
            )}
        </div>
    )
}

export default Projectdetails
import { NavLink } from "react-router-dom"

const Navbar = () => {


    return (
        <nav className="Navbar">
            <ul>
                {/* <Link to={'/'}>HOME</Link>
                <Link to={'/about'}>ABOUT</Link> */}

                <NavLink to={'/'} className={({ isActive }) => isActive ? 'selected' : ''}>
                    HOME
                </NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'selected' : ''}>
                    ABOUT
                </NavLink>
                <NavLink to={'/projects'} className={({ isActive }) => isActive ? 'selected' : ''}>
                    PROJECTS
                </NavLink>

            </ul>
        </nav>

    )
}

export default Navbar
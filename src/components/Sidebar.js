import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    
    return (
        <>
        <div className="background"></div>
        <div className='sidebar'>
            <h4>HealthWay</h4>
            <li >
                <NavLink activeClassName="actived" to='/'>Dashboard</NavLink>
                <NavLink activeClassName="active" to='/appointments'>Appointments</NavLink>
                <NavLink activeClassName="active" to='/contact-us'>Contact</NavLink>
            </li>
        </div>
        </>
    )
}

export default Sidebar

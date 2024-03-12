import React from 'react'
import {Link} from 'react-router-dom';

const Header  = () => {
    return (  
        <div className='headerComps'>
        <h1 className = "header"><Link to="/">Notes</Link></h1>
        <h3><Link to = "/create">Create</Link></h3>
        </div>
    );
}
 
export default Header;
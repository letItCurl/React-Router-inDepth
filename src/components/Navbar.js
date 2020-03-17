import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    //console.log(props)
    /*
    setTimeout(()=>{
        props.history.push('/about')
    }, 2000)*/
    return(
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment">Gloria</a>
            <div className="ui right floated header">
                <Link to="/" className='ui button'>Home</Link>
                <NavLink to="/about" className='ui button'>About</NavLink>
                <NavLink to="/contacts" className='ui button'>Contact</NavLink>
            </div>
        </nav> 
    )
}

export default withRouter(Navbar)
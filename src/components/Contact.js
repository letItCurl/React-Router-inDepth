import React from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'

const Contact = (props) => {
    
    return(
        <div>
            <Modal/>
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to="/alex" className='ui header'>Contact of Alex</Link>
                <p>Blabla.....</p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to="/will" className='ui header'>Contact of Will</Link>
                <p>Blabla.....</p>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'
import {connect} from 'react-redux'

const Contact = ({cards}) => {
    //console.log(cards)
    return(
        <div>{/*
            <Modal/>
            
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to="/will" className='ui header'>Contact of Will</Link>
                <p>Blabla.....</p>
        </div>*/}
            {cards.map(card =>{
                return(
                    <Link to={`${card.title}`}>
                        <div className="ui raised very padded text container segment" style={{marginTop: '80px'}} key={card.id}>
                            <h1 className='ui header' >{card.title}</h1>
                            <p>{card.body}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{ 
    //rediriger le state de redux vers les props de contact, cette fonction est la "carte des menu" demandé à connect pour chopé
    //notre recette dans le store
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact) // dope L'objet Contact en le connectant au store et en lui disant quoi retirer

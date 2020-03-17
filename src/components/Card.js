import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteCard, fetchUsers} from '../actions/cardActions'

class Card extends Component{
    //state = {user: ''}
    
    componentDidMount(){
        this.props.fetchUsers()
    }
    
    onButtonClick = () => {
        let id = this.props.card.id
        this.props.deleteCard(id)
        this.props.history.push('/')
    }

    render(){
        //console.log(this.props.users)
        //const {user} = this.state
        //console.log(this.props)
        //const {title, body} = this.props.card;
        const {users} = this.props
        return(
            users.map(user =>{
                return(
                <div className="ui raised very padded text container segment" style={{marginTop: '80px'}} key={user.id}>
                    <h3 className='ui header'>Card of {user.name}</h3>
                    <p>{user.email}</p>
                    <button className='ui primary right floated button' onClick={this.onButtonClick}>Delete</button>
                </div>)
            })
        )
    }
}

const mapStatetoProps = (state, ownParams) => {
    let title = ownParams.match.params.user;
    return{
        card: state.cards.find((card) => card.title === title),
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => {dispatch(deleteCard(id))},
        fetchUsers: () => {dispatch(fetchUsers())}
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card)
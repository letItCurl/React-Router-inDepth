# React ninja skills
>this is a in depth practice on special features of React-redux React-router React-Thunk React-Portal

# Reacap

***React-Router***

The key of spa's

***React-Portal***

```
import React from 'react'
import ReactDOM from 'react-dom'
const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className='ui dimmer show modals visibile active'>
            <div className='ui raised very padded text container segment'>
                <h1>I am a modal</h1>
            </div>
        </div>, document.querySelector('#modal')

    )
}
export default Modal
```

Tt make a component that is volatile.

***React-Redux***

<p align="center">
    <img src="https://static.javatpoint.com/tutorial/reactjs/images/react-redux-architecture.png">
</p>

It Makes a centralized data scructure

***React-Thunk***

<p align="center">
    <img src="https://res.cloudinary.com/duydvdaxd/image/upload/v1584462571/Vue-Sprint/REACTREDUX_yuqodr.png">
</p>

It Makes a actions on the cross above

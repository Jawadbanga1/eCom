import React from 'react'
import '../headerComp.css'

function MenuItem(props) {
    console.log(props)
    return (
        <div id='menu-bar-item' onClick={props.eventFunction}>
            <p id='text-in-menuitem'>{props.txt}</p>
        </div>
    )
}

export default MenuItem;
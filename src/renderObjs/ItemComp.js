import React, {useState} from 'react'

function ItemComp () {
    return (
        <li >
            <div >
                <img src={item.image} />
            </div>
            <span >{item.name}</span>
        </li>
    )
}

export default ItemComp;
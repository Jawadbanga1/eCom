import React from 'react'
import './cssObjsComp.css'


function Obj (props) {
    return (
        <div className='obj'>
            <div className='div-img'>
                <img className='img-obj' src={props.item.image} />
            </div>
            <span className='text-centre'>{props.item.name.toUpperCase().slice(0,1) + props.item.name.slice(1)}</span>
        </div>
    )
}

export default Obj;
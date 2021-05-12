import React from 'react'
import '../heaserComp.css'


function MenuBar (props) {
    return (
        <div className='menu-bar' id={this.props.menubarType} >
        {
            this.props.arrayData.map((item, indx) => {
                return (
                    <MenuItem eventFunction={item.callBack} txt={this.props.arrayData[indx].name} />
                )
            })
        }
        </div>
    )
}

export default MenuBar;
import React from 'react'
import './headerComp.css'
import imgBurger from './Hamburger_icon.png'
import MenuItem from './menuItem/MenuItem'
import noProfile from './profileLogo.png'
// import AddNew from '../addNew/AddNew'


class TopHeader extends React.Component {
    constructor (props) {
        super (props)
        this.state ={
            showMenu: false,
            showProfileMenu: false,
            showDialogue: true,
        }
    }

    menuButtonHandler (event, a, b, c) {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    profileButtonHandler () {
        this.setState({
            showProfileMenu: !this.state.showProfileMenu
        })
    }

    addNewButtonHandler () {
        this.setState({
            showDialogue: !this.state.showDialogue
        })
    }

    menuItemClickHandler (event, a, b, c) {
        this.setState({showMenu: false})
    }

    // componentDidMount () {
    //     window.addEventListener('click', this.handleMenuRelatedClick.bind(this))
    // }

    // componentWillUnmount () {

    //     window.removeEventListener('click', this.handleMenuRelatedClick.bind(this))

    // }

    // handleMenuRelatedClick (e) {
    //     let this1 = this
    //     if (!this.state.showMenu){
    //         if (!document.getElementById('menu-bar').contains(e.target)) {
    //             this1.setState({
    //                 showMenu: false
    //             })
    //             // alert("Clicked outside Box");
    //         }
    //     }

    // }

    render () {

        return (
            <div className='header-top-container'>       
                <div className='header-website' >
                    <button className='button-header button-menu' 
                        onClick={(event, a, b, c) => this.menuButtonHandler(event, a, b, c)}
                    >
                        <img src={imgBurger} width='25vw' height='25vh'/>
                    </button>
                    <button className='button-header button-profile-menu' 
                        onClick={(event, a, b, c) => this.profileButtonHandler(event, a, b, c)}
                    >
                        <img src={noProfile} width='25vw' height='25vh'/>
                    </button>
                    <button className='button-header button-add-menu' 
                        onClick={(event, a, b, c) => this.addNewButtonHandler(event, a, b, c)}
                    >
                        <h2 className='centering-content'>+</h2>
                    </button>
                </div>
                
                {
                    this.props.arrayMenu && this.state.showMenu ? (
                            <div className='menu-bar' id="menu-bar">
                                {
                                    this.props.arrayMenu.map((item, indx) => {
                                        return (
                                            <MenuItem eventFunction={item.callBack} txt={this.props.arrayMenu[indx].name} />
                                        )
                                    })
                                }
                            </div>
                    ) : null 
                }

                {
                    this.props.arrayAdd && this.state.showAddMenu ? (
                            <div className='menu-bar-profile' id='menu-bar-profile' >
                                {
                                    this.props.arrayAdd.map((item, indx) => {
                                        return (
                                            <MenuItem eventFunction={item.callBack} txt={item.name} />
                                        )
                                    })
                                }
                            </div>
                    ) : null 
                }       

                {
                    this.props.arrayProfileMenu && this.state.showProfileMenu ? (
                        <div className='menu-bar-profile' id='menu-bar-profile' >
                            {
                                this.props.arrayProfileMenu.map((item, indx) => {
                                    return (
                                        <MenuItem eventFunction={item.callBack} txt={item.name} />
                                    )
                                })
                            }
                        </div>
                ) : null
                } 

                {
                    // this.state.showDialogue ? <AddNew/> : null
                }
            </div>
        )
    }
}

export default TopHeader;

                                        // <MenuItem eventFunc={this.menuItemClickHandler.bind(this)} txt={this.props.arrMenu[0].name}>
                                        // </MenuItem> 



                    // this.state.showMenu ? (
                    //     <div className='menu-bar' >
                    //         <MenuItem eventFunc={this.menuItemClickHandler.bind(this)}/>
                    //         <div id='menu-bar-item' onClick={(event, a, b, c) => this.menuItemClickHandler(event, a, b, c)}>
                    //             <p id='text-in-menuitem'>Sam </p>
                    //         </div>                            
                    //         <div id='menu-bar-item'>
                    //             <p id='text-in-menuitem'>Sam sdafsdfafdawfam sdfasfawfasdf slsdkjflkasdjflkjasdf </p>
                    //         </div>                            
                    //         <div id='menu-bar-item'>
                    //             <p id='text-in-menuitem'>Sam </p>
                    //         </div>
                    //     </div>
                    // ) : null 
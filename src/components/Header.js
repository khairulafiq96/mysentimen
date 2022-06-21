import React, {Component} from 'react'

class Header extends Component {
    render(){
        return(
            <div className='headerBorder headerText headerPadding'>
                <div className='headerInline headerMenu'>
                    MySentimen
                </div>
                <div className='headerInline headerMenu'>
                    Charts
                </div>
                <div className='headerInline headerMenu'>
                    Leaders
                </div>
                <div className='headerInline loginButtonPosition'>
                    Login Button
                </div>
            </div>
        )
    }

}

export default Header
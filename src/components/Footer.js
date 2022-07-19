import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <div className='footerPosition footerPadding'>
               <div className='footerMenuItems'>
                    <a target="_blank" href='https://github.com/khairulafiq96/mysentimen/blob/DEV/privacypolicy/MySentimen_PRIVACY_POLICY.pdf'>Privacy Notice</a>
               </div>
               <div className='footerMenuItems'>
                    <a href="https://github.com/khairulafiq96/mysentimen" target="_blank">Contribute Now</a>
               </div>

            </div>
        )
    }

}

export default Footer
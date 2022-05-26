import { useState } from 'react'
import {MdOutlineArrowDropDown} from 'react-icons/md'

const IdenttyBtnDropdown = () => {
    return(
        <div className='identity__btn-skew-container'>
            <ul className='identity__btn-dropdown'>
                <li className='identity__btn-dropdown-item'>Holy</li>
            </ul>
        </div>
    )
}

const IdentityBtn = ({text, type, style, dropDownList}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        // <section style={style} className="landing__earn-more-container">
            // <div className="landing__earn-more-container-inner">
        <div className="identity__btn-skew-container">
            <button style={style} className="identity__btn">
                <span className={`identity__btn-text `}>
                    {text}
                    {!dropDownList && <MdOutlineArrowDropDown 
                        style={{marginLeft: ".2rem", 
                        fontSize: "1.3rem", 
                        position: "absolute", 
                        top:"-32%", 
                        right:"-15%"}}/>}
                    
                </span>
                {!dropDownList && (showDropdown && <IdenttyBtnDropdown />)}
            </button>
        </div>
            // {/* </div> */}
        // </section>
    )
}

export default IdentityBtn
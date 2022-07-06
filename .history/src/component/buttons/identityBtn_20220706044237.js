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

const IdentityBtn = ({text, type, style, dropDownList, onClick}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const wrapHan
    return (
        // <section style={style} className="landing__earn-more-container">
            // <div className="landing__earn-more-container-inner">
        <div className="identity__btn-skew-container">
            <button onClick={(e)=>{onClick(); setShowDropdown(showDropdown(!showDropdown))}} style={style} className={`identity__btn`}>
                <span className={`identity__btn-text `}>
                    {text}
                    {dropDownList && <MdOutlineArrowDropDown 
                        style={{marginLeft: ".2rem", 
                        fontSize: "1.3rem", 
                        position: "absolute", 
                        top:"-32%", 
                        right:"-75%"}}/>}
                    
                </span>
                {dropDownList && (showDropdown && <IdenttyBtnDropdown />)}
            </button>
        </div>
            // {/* </div> */}
        // </section>
    )
}

export const IdentityBtnWithBG = ({text, type, style, dropDownList}) => {

    return (
        
            <section style={style} className={`identity__btn-container ${type === 'dark'? "identity__btn-bg--dark" : "identity__btn-bg--light"}`}>
                <div className="identity__btn-inner-container">
                    <IdentityBtn text={text} />
                </div>
            </section>
       
    )
}

export default IdentityBtn
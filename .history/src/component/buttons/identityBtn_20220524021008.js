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

const IdentityBtn = ({text, style, dropDownList}) => {
    return (
        // <section style={style} className="landing__earn-more-container">
            // <div className="landing__earn-more-container-inner">
                <div className="identity__btn-skew-container">
                    <button style={style} className="identity__btn">
                        <span className="identity__btn-text">
                            {text}
                            {dropDownList && <MdOutlineArrowDropDown 
                                style={{marginLeft: ".2rem", 
                                fontSize: "1.8rem", 
                                position: "absolute", 
                                top:"-50%", 
                                right:"-20%"}}/>}
                            
                        </span>
                        {!dropDownList && <IdenttyBtnDropdown />}
                    </button>
                </div>
            // {/* </div> */}
        // </section>
    )
}

export default IdentityBtn
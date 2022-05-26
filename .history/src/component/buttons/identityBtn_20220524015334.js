import {MdOutlineArrowDropDown} from 'react-icons/md'

const IdenttyBtnDropdown = () => {
    return(
        <ul className='identity__btn'>
            <li>Holy</li>
        </ul>
    )
}

const IdentityBtn = ({text, style, dropDownList}) => {
    return (
        // <section style={style} className="landing__earn-more-container">
            // <div className="landing__earn-more-container-inner">
                <div className="identity__btn-skew-container">
                    <button className="identity__btn">
                        <span className="identity__btn-text">
                            {text}
                            <MdOutlineArrowDropDown 
                                style={{marginLeft: ".2rem", 
                                fontSize: "1.8rem", 
                                position: "absolute", 
                                top:"-50%", 
                                right:"-20%"}}/>
                            
                        </span>

                    </button>
                </div>
            // {/* </div> */}
        // </section>
    )
}

export default IdentityBtn
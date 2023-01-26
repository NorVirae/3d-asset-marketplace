import { useState } from 'react'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedSubPage } from '../../redux/reducers/userStateReducer'

const IdenttyBtnDropdown = ({dropDownList, dropdownOnclick, setMainText}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <div onClick={e=>{ e.stopPropagation();}} className='identity__btn-skew-container'>
            <ul onClick={e=> e.stopPropagation()} className='identity__btn-dropdown'>
                {dropDownList.map(item =>{
                    return <li onClick={ (e) => { dispatch(setSelectedSubPage({selected: item.toLowerCase()})); navigate(`/user/${item.toLowerCase()}`);  setMainText(item)}} className='identity__btn-dropdown-item'>{item}</li>
                })}
                
            </ul>
        </div>
    )
}

const IdentityBtn = ({text, type, style, dropDownList, dropdownOnclick, onClick}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [mainText, setMainText] = useState(text)
    const wrapHandler = (text) => {
        let newtext = text.split(' ')
        if (newtext.length > 1){
            return newtext.map(itm => {
                return <span key={itm}>{itm}</span>
            })
        }

        return text
    }
    return (
        // <section style={style} className="landing__earn-more-container">
            // <div className="landing__earn-more-container-inner">
        <div className="identity__btn-skew-container">
            <button onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} onClick={(e)=>{onClick();}} style={style} className={`identity__btn`}>
                <span className={`identity__btn-text `}>
                    {wrapHandler(mainText)}
                    {dropDownList && <MdOutlineArrowDropDown 
                        style={{marginLeft: ".2rem", 
                        transform: `rotate${showDropdown?0: 180}deg`,
                        fontSize: "1.3rem", 
                        position: "absolute", 
                        top:"-32%", 
                        right:"-75%"}}/>}
                    
                </span>
                {dropDownList && (showDropdown && <IdenttyBtnDropdown dropdownOnclick={dropdownOnclick} setMainText={setMainText} dropDownList={dropDownList}/>)}
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
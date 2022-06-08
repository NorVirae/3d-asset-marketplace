import {FaTimes} from 'react-icons/fa'


const CompositeBtn = ({style, logo}) => {

    return(
        <button
            style={style}
            className="landing__slogan-sell">
            <span className="landing__slogan-sell-text">
               {logo && logo} SELL
            </span>
        </button>
    )
}

export default CompositeBtn
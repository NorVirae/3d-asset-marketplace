import {FaTimes} from 'react-icons/fa'



const CompositeBtn = ({style, logo}) => {

    return(
        <div className="composite__btn-container">
            <button
                style={style}
                className="composite__btn">
                <span className="composite__btn-text">
                {logo && logo} SELL
                </span>
            </button>
        </div>
    )
}

export default CompositeBtn
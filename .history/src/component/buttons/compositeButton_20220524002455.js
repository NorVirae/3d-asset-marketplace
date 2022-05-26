import {FaTimes} from 'react-icons/fa'



const CompositeBtn = ({style}) => {

    return(
        <div className="composite-btn-container">
            <button
                style={style}
                className="composite-btn">
                <span className="composite-btn-text">
                {logo && FaTimes} SELL
                </span>
            </button>
        </div>
    )
}

export default CompositeBtn
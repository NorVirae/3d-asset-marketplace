import CompositeBtn from "../component/buttons/compositeButton"
import {FaTimes} from 'react-icons/fa'


const Experiment = () => {

    return (
        <div className="experiment-page">
            <CompositeBtn logo={<FaTimes>}/>
        </div>
    )
}

export default Experiment
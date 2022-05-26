import CompositeBtn from "../component/buttons/compositeButton"
import {FaTimes} from 'react-icons/fa'
import SearchBar from "../component/search/SearchBar"
import CGBar from "../component/card/cbBar"
import CGCard from "../component/card/CGCard"
import IdentityBtn from "../component/buttons/identityBtn"


const Experiment = () => {

    return (
        <div className="experiment-page">
            <CompositeBtn />
            <SearchBar />
            <CGBar />
            <CGCard />
            <IdentityBtn text={"Earn more"}/>
        </div>
    )
}

export default Experiment
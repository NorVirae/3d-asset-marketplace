
import {FaSearch} from 'react-icons/fa'


const SearchBar = ({short, style}) => {

    return (
            <section className='search__skew-container'>
                <div style={{...style, width: short? "60%": "100%"}} className="search__group-container">
                    <button style={{right: "1%", top: "5%"}} className="search__btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch /></span>
                    </button>
                </div>
            </section>
    )
}

export default SearchBar
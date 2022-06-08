
import {FaSearch} from 'react-icons/fa'


const SearchBar = () => {

    return (
            <section className='landing__search-skew-section'>
                <div className="landing__search-group-container">
                    <button className="landing__search-btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch /></span>
                    </button>
                    <input placeholder="Search for products artist or stores" className="landing__search-stuff" />
                </div>
            </section>
    )
}

export default SearchBar
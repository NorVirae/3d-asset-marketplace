
import {FaSearch} from 'react-icons/fa'


const SearchBar = () => {

    return (
            <section className='search__skew-container'>
                <div className="search-group-container">
                    <button className="landing__search-btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch /></span>
                    </button>
                    <input placeholder="Search for products artist or stores" className="landing__search-stuff" />
                </div>
            </section>
    )
}

export default SearchBar
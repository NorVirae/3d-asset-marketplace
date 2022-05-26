
import {FaSearch} from 'react-icons/fa'


const SearchBar = () => {

    return (
            <section className='search__skew-container'>
                <div className="search__group-container">
                    <button className="search-btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch /></span>
                    </button>
                    <input placeholder="Search for products artist or stores" className="landing__search-stuff" />
                </div>
            </section>
    )
}

export default SearchBar
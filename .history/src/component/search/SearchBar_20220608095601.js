
import {FaSearch} from 'react-icons/fa'


const SearchBar = ({short}) => {

    return (
            <section className='search__skew-container'>
                <div className="search__group-container">
                    <button className="search__btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch /></span>
                    </button>
                    <input placeholder="Search for products artist or stores" className="search__input" />
                </div>
            </section>
    )
}

export default SearchBar
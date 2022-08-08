
import {FaSearch} from 'react-icons/fa'


const SearchBar = ({short, style}) => {
    const isMobile = useMediaQuery()
    return (
            <section className='search__skew-container'>
                <div style={{...style, width: short? "60%": "100%"}} className="search__group-container">
                    <input placeholder="Search for products artist or stores" className="search__input" />

                    <button style={{right: ".3%", top: "0%"}} className="search__btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch fontSize={"1.7rem"} /></span>
                    </button>
                </div>
            </section>
    )
}

export default SearchBar
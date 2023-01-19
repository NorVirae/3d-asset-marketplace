
import {FaSearch} from 'react-icons/fa'


const NavSearchBar = ({short, style, containerStyle}) => {

    return (
            <section style={containerStyle} className='search__nav-search-skew-container'>
                <div style={{...style}} className="search__group-container">
                    <input style={{padding: ".7rem 3rem"}} placeholder="Search for products artist or stores" className="search__input" />

                    <button className="search__nav-search-btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch style={{fontSize: "1.5rem"}}/></span>
                    </button>
                </div>
            </section>
    )
}

export default NavSearchBar
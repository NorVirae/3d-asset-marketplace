
import {FaSearch} from 'react-icons/fa'


const NavSearchBar = ({short, style}) => {

    return (
            <section className='search__skew-container'>
                <div style={{...style, backgrounColor: "red", width: "60%"}} className="search__group-container">
                    <input placeholder="Search for products artist or stores" className="search__input" />

                    <button className="search__btn">
                        <span style={{transform: "skewX(25deg) scaleX(-1)"}}><FaSearch /></span>
                    </button>
                </div>
            </section>
    )
}

export default NavSearchBar
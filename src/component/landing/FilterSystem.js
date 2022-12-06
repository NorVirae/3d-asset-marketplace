import { useState } from "react"
import { FaArrowDown } from "react-icons/fa"
import { MdOutlineArrowDropDown, MdStarRate } from "react-icons/md"

const FilterCategory = () => {
    return (
        <div className="landing__filter-component-container">
            <span className="landing__filter-component-title">CATEGORY</span>
            <div className="landing__filter-component-body">
                <div className="landing__filter-dropdown-skew-container">
                    <span>Show all</span>
                    <MdOutlineArrowDropDown />
                </div>
            </div>
        </div>
    )
}

const FilterRating = () => {
    return (
        <div className="landing__filter-rating-container">
            <span>RATING</span>
            <div className="landing__filter-inner-rating">
                <MdStarRate className="landing__filter-inner-rating-rate" />
                <MdStarRate className="landing__filter-inner-rating-rate" />
                <MdStarRate className="landing__filter-inner-rating-rate" />
                <MdStarRate className="landing__filter-inner-rating-rate" />
            </div>
        </div>
    )
}

const FilterSliderCustom = () => {

    const setLeftValue = (e) => {
        let _this = e,
        min = parseInt(_this.target.min),
        max = parseInt(_this.target.max);

        _this.target.value = Math.min(parseInt(_this.value))
    }

    return (

        <div class="landing__slide-range_container">
            <input type={'range'} id="input-left" min="0" max="100" value="25" />
            <input type={'range'} id="input-right" min="0" max="100" value="25" />
            <div className="slider">
                <div className="track"></div>
                <div className="range"></div>
                <div className="thumb left"></div>
                <div className="thumb right"></div>
            </div>
        </div>
    )
}

const FilterSlider = () => {
    const [sliderChange, setSliderChange] = useState({ min: "20", max: "70" })
    const handleSliderChange = (e, type) => {
        console.log(e, "TARGETTER")
        if (type === "max") {
            if (Number(e.target.value) <= Number(sliderChange.min)) {
                setSliderChange(old => ({ ...old, min: Number(e.target.value) - 1 }))
            }

            setSliderChange(old => ({ ...old, max: e.target.value }))
        }

        if (type === "min") {
            if (Number(e.target.value) >= Number(sliderChange.max)) {
                setSliderChange(old => ({ ...old, max: Number(e.target.value) + 1 }))
            }

            setSliderChange(old => ({ ...old, min: e.target.value }))
        }
    }
    return (
        <div className="landing__filter-slider-container">
            <span className="landing__filter-slide-price">
                $&nbsp;{sliderChange.min},000
            </span>
            <div className="landing__filter-main-slider">
                <input onInput={e => handleSliderChange(e, "max")} min={"1"} max={"100"} value={sliderChange.max} type={"range"} className="landing__filter-slider-max" />

                <input onInput={e => handleSliderChange(e, "min")} min={"1"} max={"100"} value={sliderChange.min} type={"range"} className="landing__filter-slider-min" />


            </div>
            <span className="landing__filter-slide-price">
                $&nbsp;{sliderChange.max},000

            </span>
        </div>
    )
}

const FilterSystem = () => {
    const [activeFilter, setActiveFilter] = useState("recent")
    return (
        <section className="landing__filter-sytem-container">
            <div className="landing__filter-system-inner-container">
                <div className="landing__filter-headers">
                    <span onClick={e => setActiveFilter("popular")} className={`landing__filter-header-item ${activeFilter === "popular" ? "landing__filter-header-item-active" : ""}`}>POPULAR</span>
                    <span onClick={e => setActiveFilter("recent")} className={`landing__filter-header-item ${activeFilter === "recent" ? "landing__filter-header-item-active" : ""}`}>RECENT</span>
                    <span onClick={e => setActiveFilter("freebies")} className={`landing__filter-header-item ${activeFilter === "freebies" ? "landing__filter-header-item-active" : ""}`}>FREEBIES</span>
                    <span onClick={e => setActiveFilter("sale")} className={`landing__filter-header-item ${activeFilter === "sale" ? "landing__filter-header-item-active" : ""}`}>ON SALE</span>
                </div>
                <div className="landing__filter-system">
                    <FilterCategory />
                    <FilterCategory />
                    <FilterCategory />
                    {/* <FilterSliderCustom/> */}
                    {/* <FilterSlider /> */}
                    <FilterRating />
                </div>
            </div>
        </section>
    )
}

export default FilterSystem
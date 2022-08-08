

const handleTextSplit = (txt) =>{
    let splittedText = txt.split(" ")
}
const ProductTags = ({txt}) => {
    return (
        <button className="landing__filter-tags-btn">
            
            <span className="landing__filter-tags-btn-text" style={{transform: "skewX(25deg)"}}>{txt}</span>
        </button>
    )
}


export default ProductTags;
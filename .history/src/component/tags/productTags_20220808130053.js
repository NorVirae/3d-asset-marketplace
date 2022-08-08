

const handleTextSplit = (txt) =>{
    let splittedText = txt.split(" ")
    splittedText.map(theSplitted => {
        return <span>{theSplitted}</span>
    })
}
const ProductTags = ({txt}) => {
    return (
        <button className="landing__filter-tags-btn">
            
            <span className="landing__filter-tags-btn-text" style={{transform: "skewX(25deg)"}}>{handleTextSplit(txt)}</span>
        </button>
    )
}


export default ProductTags;
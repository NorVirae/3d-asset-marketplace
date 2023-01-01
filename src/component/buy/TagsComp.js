import { useState } from "react"
import { BsTags } from "react-icons/bs"
import { VscTriangleUp } from "react-icons/vsc"
import { MainTags } from "../../pages/upload"

const TagsComp = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="buy__tags-container">
            <div onClick={() => setIsOpen(!isOpen)} className="buy__tag-header">
                <BsTags style={{color: '#FF9700'}}/> Tags <VscTriangleUp className="buy__tag-arrow" style={{color: '#6D6D91', transform: `rotate(${isOpen? '45deg': '180deg'})`}}/>
            </div>

            {isOpen && <section className="upload__tags-inner-container">
                        <MainTags text="3D Assets" defaultState={false}/>
                        <MainTags text="Games" defaultState={true}/>
                        <MainTags text="Anime" defaultState={true}/>
                        <MainTags text="2D Assets" defaultState={true}/>
                        <MainTags text="compose" defaultState={true}/>
                        <MainTags text="Cinema" defaultState={true}/>
                        <MainTags text="Mesh" defaultState={true}/>
                        <MainTags text="Topo" defaultState={true}/>
                    </section>}
        </div>
    )
}

export default TagsComp
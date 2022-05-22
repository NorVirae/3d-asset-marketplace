


const CheckButtons = ({active, setActive}) => {
    return (
        <div onClick={e=>setActive(!active)} className="app__checkbutton-container">
            <div onClick={e=>setActive(!active)} className={"app__checkbutton " + ${active?"activate-round": ""}`}>
                {active && <div className="app__checkbutton-active"></div>}
            </div>
        </div> 
    )
}

export default CheckButtons
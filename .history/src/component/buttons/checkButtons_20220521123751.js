


const CheckButtons = ({active, setActive}) => {
    return (
        <div on className="app__checkbutton-container">
            <div className="app__checkbutton">
                {active && <div className="app__checkbutton-active"></div>}
            </div>
        </div>
    )
}

export default CheckButtons
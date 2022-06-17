import { useEffect, useState } from "react"





const LoootyLogo = ({style, color="#8383b2"}) => {
    const logoCol = color

    const [yScroll, setYScroll] = useState(0)
    const handleScroll = (event) => {
        // console.log(window.scrollY, "hey")
        setYScroll(window.scrollY)
        console.log(yScroll)
        
    }

    useEffect(() => {
        console.log("hey")
        console.log(window.scrollY)
        window.addEventListener("scroll", (e) =>handleScroll(e));

    })

    return <div style={{ width: "7rem", height: "100%", alignItems: "center", display:"flex", justifyContent:"center", ...style}} className="loooty-logo">
                <svg style={{height: "100%", width: "100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.32 77.72">
                    <title>loooty logo</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="17.83 6.27 0 45.08 27.05 45.08 31.89 34.63 14.92 34.63 30.77 0 17.83 6.27" style={{opacity: `${yScroll/100 * 1}`, fill: logoCol,8 40.23 103.48 40.23 111.41 22.8" style={{fill: logoCol}}/>
                        </g>
                    </g>
                </svg>
    </div>
}

export default LoootyLogo
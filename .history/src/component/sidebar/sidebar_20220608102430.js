import "./sidebar.css"


const Sidebar = () => {
    return (
        <section>
            <section className="sidebar__auth-sec">
            <li onClick={e=>setShowLogin(!showLogin)} className={"landing__nav-item login"}>
                    <Link className="landing__nav-link" to={"#"}>
                        Sign In
                    </Link>
                    {showLogin &&<LoginModal onClick={e=>e.stopPropagation()}/>}

                </li>

                <li onClick={e=>setShowRegModal({...showRegModal, register:!showRegModal.register})} className={"landing__nav-item signup"}>
                    <Link className="landing__nav-link" to={"#"}>
                        Sign Up
                    </Link>
                </li>
            </section>
        </section>
    )
}

export default Sidebar
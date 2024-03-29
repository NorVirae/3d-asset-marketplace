
import React, { useState } from 'react'



export const RegisterContext = React.createContext()


export const RegisterProvider = ({children}) => {
    const [showRegModal, setShowRegModal] = useState({register:false, isComingSoonOpen: false, login: false, loginDrop: false, openStore: false, isSidebarOpen: false})

    return  (<RegisterContext.Provider value={[showRegModal, setShowRegModal]}>
                {children}
            </RegisterContext.Provider>)
}

import React, { useState } from 'react'



export const RegisterContext = React.createContext()


export const RegisterProvider = ({children}) => {
    const [showRegModal, setShowRegModal] = useState({register:false, openStore: false, sidebarOpen:})

    return  (<RegisterContext.Provider value={[showRegModal, setShowRegModal]}>
                {children}
            </RegisterContext.Provider>)
}
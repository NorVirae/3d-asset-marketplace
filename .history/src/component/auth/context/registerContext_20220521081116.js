
import React, { useState } from 'react'



export const RegisterContext = React.createContext()


export const RegisterProvider = ({children}) => {
    const [showRegModal, setShowRegModal] = useState(true)

    return <RegisterContext.Provider value={[showRegModal, setShowRegModal]}>
                {children}
            </RegisterContext.Provider>
}
import React, {createContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { authChangeListener, signOutUser, createUserDocumentFromAuth } from '../utils/firebase/firebase';

export const UserContext = createContext({
currentUser: null,
setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}

    useEffect(() => {
       const unsubscribe = authChangeListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user)
         }
     setCurrentUser(user)
   
    
        })
        return unsubscribe
    }, [])

return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


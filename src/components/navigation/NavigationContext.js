import React,{useState, createContext,useMemo } from "react";

export const NavigationContext = createContext();
const NavigationProvider = ({children}) =>{
    const [drawerMenuItemSelected, setSelectedMenuItem] = useState(1);
    const value = {drawerMenuItemSelected}
    return <NavigationContext.Provider value={value}>
        {children}
    </NavigationContext.Provider>
}

export default NavigationProvider
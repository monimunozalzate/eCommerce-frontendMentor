import React, { createContext, useState } from "react";

export const QuantityContext = createContext();

const QuantityProvider = ({children})=>{
    const [isAdding, setisAdding] = useState(0);

    return(
        <QuantityContext.Provider value={{isAdding, setisAdding}}>
            {children}
        </QuantityContext.Provider>
    )
};

export default QuantityProvider;
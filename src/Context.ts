import React, { SetStateAction, Dispatch } from "react";

interface Context {
    isMenuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default React.createContext<Context>({} as Context)
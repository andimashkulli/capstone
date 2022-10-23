import { useState } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

import { useEffect } from "react";
export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({})
  useEffect(() => {
const categoriesMap = async () => {
const categoryMap = await getCategoriesAndDocuments(); 

setCategoriesMap(categoryMap)
}

categoriesMap()
  },[]);
    const value = {categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>
{children}
        </CategoriesContext.Provider>
    )
}
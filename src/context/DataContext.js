import { createContext, useState, useEffect } from "react";
// router-dom import
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
// api routes
import api from "../api/posts";
import userApi from "../api/users";
import useWindowSize from "../hooks/useWindowSize";

const DataContext = createContext();

export const DataProvider = ( { childern } ) => {
    return (
        <DataContext.Provider value={{
            
        }}>
            {
                childern
            }
        </DataContext.Provider>
    );
}


export default DataContext;
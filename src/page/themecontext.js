
import { border } from "@mui/system";
import React from "react";
import { useState } from "react";

export const themes ={
    dark:{
        color:'white',
        background:'pink',
       
    },
    light:{
        color:'black',
        background:'white',
     
    }
}
const ThemeContext = React.createContext(themes.dark);
export default ThemeContext
import React, { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {

    let currentValue;

    const [value,setValue] = useState(()=>{
        try{
            currentValue = JSON.parse(localStorage.getItem(key)|| String(defaultValue))
    
        }catch(error){
            console.log(error);
            currentValue = defaultValue;
        }
        return currentValue;

    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])
    

    
    return [value,setValue];
  
};

export default useLocalStorage;

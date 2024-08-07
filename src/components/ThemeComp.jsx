"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const ThemeComp = () => {
  const [mounted, setMounted] = useState(false)
  const {systemTheme,theme, setTheme} = useTheme()
  
  useEffect(()=>{
    setMounted(true)
  }, [])

  const themeMode = theme === "system" ? systemTheme : theme
  
  console.log(themeMode, "themeMode")
  return (
    <div>
      {
        mounted && (
          themeMode === "dark" ? 
          <CiDark onClick={()=>setTheme('light')} className='curson-pointer' size={25}/> :
          <CiLight onClick={()=>setTheme('dark')}  className='curson-pointer' size={25}/>


        )
      }
    </div>
  )
}

export default ThemeComp
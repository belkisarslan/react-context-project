import React from 'react'
import { MainContext, useContext } from '../context'

const Container = () => {

    const {theme, setTheme} = useContext(MainContext)

    const changeTheme= ()=>{
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  
    return (
    <button onClick={changeTheme}>Change Theme</button>
  )
}

export default Container
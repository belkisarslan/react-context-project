import React from 'react'
import { MainContext, useContext } from '../context'

const Container = () => {

    const { theme, setTheme } = useContext(MainContext)

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='button-container'>
            <button className='button-change' onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Container
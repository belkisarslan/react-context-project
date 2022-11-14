import React from 'react'
import { MainContext, useContext } from '../context'

const Container = () => {
    //3.adım app.js'te tanımlayıp dataya eklediğimiz theme ve setTheme'i bu şekilde çağırıyoruz.
    const { theme, setTheme } = useContext(MainContext)

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='button-container3'>
        <div className='button-container2'>
        <div className='button-container'>
            <button className='button-change' onClick={changeTheme}>Change Theme</button>
        </div>
        </div>
        </div>
    )
}

export default Container
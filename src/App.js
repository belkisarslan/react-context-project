import { MainContext } from './context';
import './App.css';
import { useEffect, useState } from 'react';
import Container from './component/Container';



function App() {

  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    document.body.className = theme
  }, [theme])

  const data ={
    theme,
    setTheme
  }

  return (
    <MainContext.Provider value={data}>
     <Container/>
    </MainContext.Provider>
  )
}

export default App;

import { MainContext } from './context';
import './App.css';
import { useEffect, useState } from 'react';
import Container from './component/Container';



function App() {

  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    document.body.className = theme
  }, [theme])
  
  //data objesinin içine ne dahil edersek diğer componentlerde aynı seviyede erişilebilir olacaktır.
  const data ={
    theme,
    setTheme
  }

  return (
    //2. adım main context provider ile componenti sarmalıyoruz. Value olarak data objesini veriyoruz.
    <MainContext.Provider value={data}>
     <Container/>
    </MainContext.Provider>
  )
}

export default App;

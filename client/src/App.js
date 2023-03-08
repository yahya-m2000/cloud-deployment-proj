import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState([])

  useEffect( async () => {
    const res = await fetch('')
    const data = res.json()
    setData(data)
  }, [])


  return (
    
  );
}

export default App;

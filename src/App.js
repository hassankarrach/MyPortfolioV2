import { useEffect,useState } from "react";
import Main from "./Pages/Main";
import Loader from './Pages/Loader/Loader'

function App() {
  const[isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 4500)
  },[])

  return (
    isLoading?
    <Loader/>
    :
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

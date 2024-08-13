import Resetcss from "./utils/resetCSS"
import MainPage from "./pages/mainPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import "animate.css/animate.compat.css"
import { useEffect } from "react";
import axios from "axios";


function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/health`);
        console.log(response)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);  
  return (
    <div className="App">
      <Resetcss />
      <MainPage />
    </div>
  )
}

export default App

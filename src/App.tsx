import Resetcss from "./utils/resetCSS"
import MainPage from "./pages/mainPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


function App() {

  return (
    <div className="App">
      <Resetcss />
      <MainPage />
    </div>
  )
}

export default App

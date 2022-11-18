import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home Page/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  )
}
export default App;
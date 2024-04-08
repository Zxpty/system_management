import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dash from './Components/Dash.jsx'
import Matricula from './Components/Matricula.jsx'
import Menu from './Components/Menu.jsx';

function App() {
  return (
    <BrowserRouter>
      <Dash />
      <div className="flex flex-row w-screen gap-4">
        <Menu />
        <Routes>
          <Route path='matricula' element={<Matricula />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

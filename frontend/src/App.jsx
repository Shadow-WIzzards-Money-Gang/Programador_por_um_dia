import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/Header"
import Home from './routes/Home';
import Sobre from './routes/Sobre';
import Produtos from './routes/Produtos';
import Login from './routes/Login';

function App() {
  return (
    <section className="bg-neutral-900 min-h-screen">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  )
}

export default App

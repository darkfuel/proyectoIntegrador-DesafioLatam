import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/Context'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import useUser from './context/hooks/useUser'

import Home from './views/Home'
import Productos from './views/Productos'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'

function App () {
  const globalState = useUser()
  return (
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id' element={<Productos />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Context.Provider>
  )
}
export default App

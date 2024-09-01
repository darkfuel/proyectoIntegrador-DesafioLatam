import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/Context'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './views/Home'
import Productos from './views/Productos'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'
import Details from './views/Details'
import Profile from './views/Profile/Profile'
import NuevoProducto from './views/nuevoProducto/NuevoProducto'

function App () {
  const [user, setUser] = useState(null)
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState([])
  const [productDetails, setProductDetails] = useState({})
  const [cart, setCart] = useState([])

  const setNuevoUsuario = (nuevoUsuario) => setUser(nuevoUsuario)

  const getData = async () => {
    const res = await fetch('/product.json')
    const product = await res.json()
    setProductos(product)
  }

  const addProduct = ({ id, price, title, img, descripción }) => {
    const productAdded = cart.find((product) => product.id === id)
    const newAdded = { id, price, title, img, descripción, count: 1 }
    if (productAdded !== undefined) {
      cart[cart.findIndex((product) => product.id === newAdded.id)].count++
      setCart([...cart])
    } else {
      setCart([...cart, newAdded])
    }
  }

  const upCount = (index) => {
    cart[index].count++
    setCart([...cart])
  }

  const donwCount = (index) => {
    if (cart[index].count > 1) {
      cart[index].count--
      setCart([...cart])
    } else {
      cart.splice(index, 1)
      setCart([...cart])
    }
  }

  const eraseCart = () => {
    setCart([])
  }

  const globalState = {
    user,
    total,
    productos,
    productDetails,
    cart,
    setNuevoUsuario,
    setProductDetails,
    setTotal,
    addProduct,
    upCount,
    donwCount,
    eraseCart
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id' element={<Details />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/nuevo-producto' element={<NuevoProducto />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Context.Provider>
  )
}
export default App

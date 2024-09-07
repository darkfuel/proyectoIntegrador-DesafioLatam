import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { ENDPOINT } from '../config/constantes.jsx'
export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState([])
  const [productDetails, setProductDetails] = useState({})
  const [cart, setCart] = useState([])

  const getData = async () => {
    const res = await fetch('http://localhost:3000/productos')
    const product = await res.json()
    setProductos(product)
  }

  useEffect(() => {
    getData()
  }, [])

  const addProduct = ({ id, precio, nombre, img, descripcion }) => {
    const productAdded = cart.find((product) => product.id === id)
    const newAdded = { id, precio, nombre, img, descripcion, count: 1 }
    if (productAdded !== undefined) {
      cart[cart.findIndex((product) => product.id === newAdded.id)].count++
      setCart([...cart])
    } else {
      setCart([...cart, newAdded])
    }
  }

  const borrarProduct = ({ id }) => {
    axios.delete(`${ENDPOINT.borrar}/${id}`)
      .then(({ data }) => {
        console.log('producto eliminado', data);
        getData()
      })
      .catch(({ response: { data } }) => {
        console.error(data);
      });
  };
  

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

  const globalStateProduct = {
    total,
    productos,
    productDetails,
    cart,
    setProductDetails,
    setTotal,
    addProduct,
    upCount,
    donwCount,
    eraseCart,
    borrarProduct
  }

  return (
    <ProductContext.Provider value={globalStateProduct}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider

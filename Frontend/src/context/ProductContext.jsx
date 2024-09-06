import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState([])
  const [productDetails, setProductDetails] = useState({})
  const [cart, setCart] = useState([])

  const getData = async () => {
    const res = await fetch('/product.json')
    const product = await res.json()
    setProductos(product)
  }

  useEffect(() => {
    getData()
  }, [])

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
    eraseCart
  }

  return (
    <ProductContext.Provider value={globalStateProduct}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
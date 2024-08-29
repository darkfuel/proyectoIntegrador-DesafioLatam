import { useContext } from 'react'
import Context from '../context/Context.jsx'

const Carrito = () => {
  const productos = useContext(Context)
  console.log(productos)

  return (
    <>
      <h1>Carrito</h1>
    </>
  )
}

export default Carrito

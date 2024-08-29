import { Link, useNavigate, NavLink } from 'react-router-dom'
import Context from '../context/Context'
import { useContext } from 'react'
import ModalLogin from './Login/ModalLogin'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  const navigate = useNavigate()
  const { getNuevoUsuario, setNuevoUsuario } = useContext(Context)

  const logout = () => {
    setNuevoUsuario()
    window.sessionStorage.removeItem('token')
    navigate('/')
  }

  const isLogin = () => {
    if (!getNuevoUsuario) {
      return <ModalLogin />
    }

    return (
      <>
        <Link to='/perfil' className='btn m-1 btn-light'>Mi Perfil</Link>
        <button onClick={logout} className='btn btn-danger'>Salir</button>
      </>
    )
  }

  const claseActive = ({ isActive }) =>
    isActive ? 'nav-item nav-link active' : 'nav-item nav-link'

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>
          <NavLink className={claseActive} to='/'>
            Nuestro Logo
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink className={claseActive} to='/'>
              Home
            </NavLink>
            <NavLink className={claseActive} to='/Productos'>
              Productos
            </NavLink>
            <NavLink className={claseActive} to='/Carrito'>
              Carrito
            </NavLink>
            <div style={{ marginLeft: '30px' }}>
              {isLogin()}
            </div>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigation

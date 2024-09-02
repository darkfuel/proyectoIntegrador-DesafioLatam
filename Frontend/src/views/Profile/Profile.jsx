import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../../context/Context'
import axios from 'axios'
import './profile.css'
import { MDBCard, MDBCardHeader, MDBCardSubTitle, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit'
import { ENDPOINT } from "../../config/constantes"

const Profile = () => {
  // const navigate = useNavigate()
  const { getNuevoUsuario, setNuevoUsuario } = useContext(Context)

  const getNuevoUsuarioData = () => {
    const token = window.sessionStorage.getItem('token')
    console.log('token front:', token)

    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => setNuevoUsuario({ ...user }))
      .catch(({ response: { data } }) => {
        console.error(data)
        window.sessionStorage.removeItem('token')
        setNuevoUsuario(null)
        navigate('/')
      })
  }

  useEffect(getNuevoUsuarioData, [])

  // window.sessionStorage.setItem('userId', getNuevoUsuario.id)
  // const idUser = sessionStorage.getItem('userId')
  // if (idUser) {
  //   console.log('ID encontrado desde perfil:', idUser)
  // } else {
  //   console.log('No se encontró ningún ID en sessionStorage')
  // }

  console.log(getNuevoUsuario)

  return (
    <div className='miPerfil'>
      <h1 className='d-flex justify-content-center pt-4'>Bienvenido a La Ruta!</h1>

      <div className='contenidoMiPerfil'>
        <MDBCard className='w-50 p-3 m-5'>
          <MDBCardHeader><MDBCardTitle>Mis Datos Personales:</MDBCardTitle></MDBCardHeader>
          <MDBCardBody>
            <div className='containerDatosPerfil'>
              <div>
                <MDBCardSubTitle className='subtituloPerfil fw-bold'>Nombre:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.nombre}</MDBCardText>
              </div>
              <div>
                <MDBCardSubTitle className='subtituloPerfil fw-bold'>Apellido:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.apellido}</MDBCardText>
              </div>
            </div>

            <div className='container'>
              <div className='mt-3'>
                <MDBCardSubTitle className='subtituloPerfil fw-bold'>Email:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.email}</MDBCardText>
              </div>
              <div className='mt-3'>
                <MDBCardSubTitle className='subtituloPerfil fw-bold'>Teléfono:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.telefono}</MDBCardText>
              </div>
            </div>

            <div className='mt-3'>
                <MDBCardSubTitle className='subtituloPerfil fw-bold'>Dirección:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.direccion}</MDBCardText>
              </div>
          </MDBCardBody>
        </MDBCard>

        <img
          src='/img/mapa.png'
          className='imgPerfil img-fluid rounded'
          alt='example'
        />

      </div>
    </div>
  )
}

export default Profile

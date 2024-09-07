import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { registrarUsuario, validarUsuario, getUsuario } from '../models/models.user.js'
import { jwtSign, jwtDecode } from '../utils/jwt/jwt.js'
import { authToken } from '../middlewares/authToken.js'

import { AllProducts, findById, deleteById } from '../models/models.products.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.post('/users', async (req, res) => {
  try {
    const { nombre, apellido, telefono, email, direccion, password } = req.body
    console.log(nombre, apellido, telefono, email, direccion, password)

    await registrarUsuario({ nombre, apellido, telefono, email, direccion, password })
    res.status(201).json({ status: true, message: 'Usuario registrado con éxito' })
  } catch (error) {
    res.status(error.code || 500).json({ message: 'Error en la conexión', error })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(email, password)

    await validarUsuario(email, password)

    const token = jwtSign({ email })

    res.status(200).json({ token })
  } catch (error) {
    console.error('Error en el login:', JSON.stringify(error, null, 2))
    res.status(error.code || 500).send(error)
  }
})

app.get('/users', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    console.log('authorization GET/users:', authorization)

    const [, token] = authorization.split(' ')
    const { email } = jwtDecode(token)

    const user = await getUsuario(email)
    console.log('user desde get', user)

    res.status(200).json(user)
  } catch (error) {
    res.status(error.code || 500).send(error)
  }
})

app.get('/productos', async (req, res) => {
  try {
    const result = await AllProducts(req.query)
    res.status(200).json(result)
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error.message)
    res.status(500).json({ status: false, message: 'Internal Server Error' })
  }
})

app.get('/productos/:id', async (req, res) => {
  try {
    const result = await findById(req.params.id)
    res.status(200).json({ status: true, message: result })
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error.message)
    res.status(500).json({ status: false, message: 'Internal Server Error: (id)' })
  }
})

app.delete('/productos/:id', async (req, res) => {
  try {
    const result = await deleteById(req.params.id)
    res.status(200).json({ status: true, message: result })
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error.message)
    res.status(500).json({ status: false, message: 'Internal Server Error: (id)' })
  }
})

app.listen(PORT, () => console.log('SERVER UP!'))

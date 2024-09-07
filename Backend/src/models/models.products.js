import { db } from '../database/conectionDB.js'

export const AllProducts = async (query) => {
  const queryString = 'SELECT * FROM productos'

  try {
    const result = await db(queryString)
    return result
  } catch (error) {
    console.error('Error al consultar productos:', error.message)
    throw error
  }
}

export const registrarProducto = async ({ nombre, precio, stock, descripcion, imgPath, idUser }) => {
  console.log('datos desde models.productos', nombre, precio, stock, descripcion, imgPath, idUser)

  const query = 'INSERT INTO productos (nombre, precio, stock, descripcion, img, creado_por) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
  const values = [nombre, precio, stock, descripcion, imgPath, idUser]
  const { rowCount } = await db(query, values)

  if (!rowCount) {
    const newError = { code: 500, message: 'No se pudo registar el nuevo producto' }
    throw newError
  }
}

export const findById = async (id) => await db('SELECT * FROM productos WHERE id = $1;', [id])

export const deleteById = async (id) => await db('DELETE FROM productos WHERE id = $1;', [id])

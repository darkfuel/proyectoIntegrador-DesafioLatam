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

export const findById = async (id) => await db('SELECT * FROM productos WHERE id = $1;', [id])

export const deleteById = async (id) => await db('DELETE FROM productos WHERE id = $1;', [id])

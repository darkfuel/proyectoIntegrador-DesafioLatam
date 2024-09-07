import { db } from '../database/conectionDB.js'

export const AllProducts = async (query) => {
  const queryString = 'SELECT * FROM productos ORDER BY id DESC'

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

export const updateFavorite = async (id) => {
  const { rows } = await db('SELECT favorite FROM productos WHERE id = $1;', [id])
  const favorite = (rows[0].favorite)
  if (favorite === false) {
    const queryTrue = 'UPDATE productos SET favorite = true WHERE id = $1;'
    const values = [id]
    return await db(queryTrue, values)
  } else {
    const queryFalse = 'UPDATE productos SET favorite = false WHERE id = $1;'
    const values = [id]
    return await db(queryFalse, values)
  }
}

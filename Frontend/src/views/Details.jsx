import { useParams } from 'react-router-dom'
import { ENDPOINT } from '../config/constantes'

const Details = () => {
  const { id } = useParams()

  fetch(`${ENDPOINT.detalle}/${id}`)

  return (
    <div>Details</div>
  )
}

export default Details

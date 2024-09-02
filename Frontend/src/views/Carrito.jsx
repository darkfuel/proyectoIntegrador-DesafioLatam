import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context.jsx";
import { Container } from "react-bootstrap";
import Payment from "../components/Payment.jsx";

const Carrito = () => {
  const navigate = useNavigate();
  const { setTotal, total, cart, upCount, donwCount, eraseCart } =
    useContext(Context);
  const totalCart = cart.reduce(
    (acum, actualValu) => acum + actualValu.price * actualValu.count,
    0
  );
  setTotal(totalCart);

  return (
    <div>
      <h5>Detalle del Pedido</h5>
      <Container className="fluid m-3 text-center d-flex flex-row gap-5 justify-content-between">
        <div className=" fluid shadow-lg p-5 mb-3 bg-body-tertiary rounded">
          {cart.map((producto, index) => (
            <div key={producto.id} className="d-flex justify-content-around">
              <div className="d-flex">
                <img src={producto.img} alt="" width={300} className="p-3" />
                <p className="mt-3 text-capitalize">
                  <strong>{producto.title}</strong>
                </p>
              </div>
              <div className="ms-5 m-3">
                <p>Precio : {producto.price}</p>
                <div className="d-flex">
                  <button
                    className="btn btn-success"
                    onClick={() => upCount(index)}
                  >
                    +
                  </button>
                  <p>{producto.count}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => donwCount(index)}
                  >
                    -
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div>
          <h2>Total: {total}</h2>
          <button className="btn btn-secondary" onClick={() => eraseCart()}>
            Limpiar
          </button>
          <button className="btn btn-info" onClick={() => navigate("/")}>
            Volver
          </button>
          <hr />
          <Payment />
        </div>
      </Container>
    </div>
  );
};

export default Carrito;

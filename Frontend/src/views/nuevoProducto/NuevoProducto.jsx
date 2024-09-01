import React, { useRef, useState } from "react";
import "./nuevoProducto.css";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

const NuevoProducto = () => {
  const defaultFile = "/img/imgNuevoProducto.png";
  const [imgSrc, setImgSrc] = useState(defaultFile);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImgSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImgSrc(defaultFile);
    }
  };

  return (
    <>
      <h2>Agrega un nuevo producto:</h2>
      <form className="formNuevoProducto">
          <div className="producto d-flex flex-column">
            <img
              id="imgNuevoProducto"
              className="imgNuevoProducto"
              src={imgSrc}
              alt="agregar nuevo producto"
            />
            <input
              type="file"
              name="nuevoProducto"
              id="cargarNuevoProducto"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <label htmlFor="cargarNuevoProducto" className="btn btn-primary">Agregar imagen</label>
          </div>

          <div className="detalleProducto">
            <MDBInput id="NombreProducto" wrapperClass="mb-4" label="Nombre" />
            <MDBInput
              type="text"
              id="precioProducto"
              wrapperClass="mb-4"
              label="Precio"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              className="descripcionProducto"
              id="descripcionProducto"
              rows={4}
              label="Descripción"
            />

            <MDBBtn type="submit" className="mb-4" block>
              Agregar Producto
            </MDBBtn>
          </div>

      </form>
    </>
  );
};

export default NuevoProducto;

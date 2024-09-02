import { useEffect, useRef, useState } from "react";
import "./nuevoProducto.css";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { ENDPOINT } from "../../config/constantes";
import axios from "axios";

const NuevoProducto = () => {
  const token = window.sessionStorage.getItem('token')
  const userdId = sessionStorage.getItem('userId')
  console.log('token desde nuevo producto:', token)

  const defaultFile = "/img/imgNuevoProducto.png"
  const [imgSrc, setImgSrc] = useState(defaultFile)
  const fileInputRef = useRef(null)
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    stock: "",
    descripcion: "",
    creado_por: userdId
  })

  const handleProduct = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function (e) {
        const imageSrc = e.target.result
        setImgSrc(imageSrc)
      };
      reader.readAsDataURL(file)
    } else {
      setImgSrc(defaultFile)
    }
  };

  const handleForm = (e) => {
    e.preventDefault()
    const validadorNum = /^\d*$/

    if (
      !producto?.nombre?.trim() ||
      !producto?.precio?.trim() ||
      !producto?.stock?.trim() ||
      !producto?.descripcion?.trim()
    ) {
      return Swal.fire("Todos lo campos son obligatorios")
    }

    if (
      !validadorNum.test(producto.precio) ||
      !validadorNum.test(producto.stock)
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Precio y stock deben ser números",
      })
    }
    const productoToSend = {
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      descripcion: producto.descripcion,
      img: imgSrc,
    }

    console.log(productoToSend)

    axios
      .post(ENDPOINT.nuevoProducto, productoToSend,{ headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto creado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${data.message}`,
        })
      })

    setProducto({nombre: "",
      precio: "",
      stock: "",
      descripcion: ""}),
    setImgSrc(defaultFile)
  };

  return (
    <>
      <h2 className="tituloNuevoProducto">Agrega un nuevo producto:</h2>
      <form className="formNuevoProducto" onSubmit={handleForm}>
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

          <label htmlFor="cargarNuevoProducto" className="btn btn-primary">
            Agregar imagen
          </label>
        </div>

        <div className="detalleProducto">
          <MDBInput
            type="text"
            id="NombreProducto"
            name="nombre"
            wrapperClass="mb-4"
            label="Nombre del producto"
            value={producto.nombre}
            onChange={handleProduct}
          />
          <div className="d-flex gap-3">
            <MDBInput
              type="number"
              id="precioProducto"
              name="precio"
              wrapperClass="mb-4"
              label="Precio"
              value={producto.precio}
              onChange={handleProduct}
            />
            <MDBInput
              type="number"
              id="stock"
              name="stock"
              wrapperClass="mb-4"
              label="Stock"
              value={producto.stock}
              onChange={handleProduct}
            />
          </div>

          <MDBInput
            wrapperClass="mb-4"
            type="text"
            className="descripcionProducto"
            id="descripcionProducto"
            name="descripcion"
            rows={4}
            label="Descripción"
            value={producto.descripcion}
            onChange={handleProduct}
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

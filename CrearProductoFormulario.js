import React, { useState } from "react";
import { FormGroup } from "react-bootstrap";
import  Button from "react-bootstrap/Button";
import  Form from 'react-bootstrap/Form';

function CrearProductoFormulario({callback}) {

const [titulo, setTitulo]= useState("")
const [imagen, setImagen]= useState("")
const [precio, setPrecio]= useState("")
const [categoria, setCategoria]= useState("")
const [descripcion, setDescripcion]= useState("")

const enviarFormulario= (e)=>{
e.preventDefault()
callback({titulo, imagen, precio, categoria, descripcion})
} 
return (
<Form onSubmit={enviarFormulario}>
<Form.Group className="mb-3" controlId="titulo">
<Form.Label>Titulo</Form.Label>
<Form.Control type="text" placeholder="Ingrese un titulo" required
 value={titulo} onChange={e=> setTitulo(e.target.Value)}/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="imagen">
 <Form.Label>Imagen</Form.Label>
 <Form.Control type="url" placeholder="Ingrese la url de la imagen" required
value={imagen} onChange={e=> setImagen(e.target.Value)}/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="precio">
 <Form.Label>Precio</Form.Label>
<Form.Control type="number" placeholder="Ingrese un precio" required
 value={precio} onChange={e=> setPrecio(e.target.Value)}/>
 </Form.Group>
 <Form.Group> className="mb-3" controlId="categoria">
<Form.Label>Categoria</Form.Label>
<Form.Control> as="select" type="select" required
 value={categoria} onChange={e=> setCategoria(e.target.Value)}/>
<option value="">Seleccione</option>
<option value="1">Tecnologia</option>
<option value="2">Ropa</option>
</Form.Control>
</Form.Group>
<Form.Group>className="mb-3" controlId="descripcion">

    
    
</Form.Group>




</Form>

);

}
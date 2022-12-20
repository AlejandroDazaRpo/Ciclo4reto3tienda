import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PRODUCTOSCREADOS_GET_ENDPOINT } from '../connections/endpoints';
import ProductoCard from '../componentes/ProductoCard';

function ProductosCreados() {

    const [productos, setProductos]= useState([])

    useEffect(()=>{

    
     axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
     .then(respuesta=>{
        console.log(respuesta.data)
        setProductos(respuesta.data)
     })
     .catch(err=>{
        console.error(err)
     })
    }, [])


  return (
    <Container className="mt-3 mb-3 text center">        
        <h3>Producos creados</h3>
      <Row className= 'justify-content-center'>
        <Col>
           <Row>
                 {productos.map(producto=> <ProductoCard producto={producto} />)}
           </Row>               
        </Col>
      </Row>
    </Container>
  );
}

export default ProductosCreados;
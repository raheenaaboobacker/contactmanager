import React from 'react'
import {ListGroup,Button,Container,Col,Row} from "react-bootstrap"
import './Contactlist.css'


function Contactlist(props) {
  const deleteitem=(a)=>{
    console.log("removeItem"+a);
    props.remove(a)
  // const remove = data.filter((check)=>{
  //   return (check.id !==a)
  // });
   
  }
const mapout=props.array.map((data,i)=>{
console.log("maped data  "+data.name);

return (
  <div ><ListGroup key={i} >
  <ListGroup.Item>{data.name+" "}{data.number} <Button variant="danger" type="delete" onClick={() => deleteitem(i)}  >
    Delete
  </Button></ListGroup.Item>
 
  
</ListGroup></div>
)
});
return(<>
<div >
  <br/>
  <Container>
    
    <Row>
      <Col></Col>
    <br/>

      <Col id='conatcadd'>{mapout}</Col>
      <Col></Col>

    </Row>
  </Container>

</div>

</>)

}

export default Contactlist
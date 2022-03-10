import {React,useState} from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import './Contactadd.css'
function Contactadd(props) {
    const [contacts,setContacts]=useState({
        name:'',
        number:''

    });
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
       
    }
    const addContacts=()=>{
        console.log(contacts.name)
    props.add(contacts)
      }
  return (
    <div>
      <Container>
 <br/>
  <Row>
    <Col></Col>
    <Col id='conatcadd'>
    <Form className='container' onSubmit={addContacts}>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleInputChange} value={contacts.name}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Number</Form.Label>
    <Form.Control type="number" placeholder="Enter number" name='number' onChange={handleInputChange} value={contacts.number}  />
   
  </Form.Group>
  
  <Button variant="success" type="submit" >
    Submit
  </Button>
</Form>
    </Col>
    <Col></Col>
  </Row>
</Container>
      </div>
  )
}

export default Contactadd

import { useEffect, useState } from 'react';
import './App.css';
import Contactadd from './components/Contactadd/Contactadd';
import Contactlist from './components/Contactlist/Contactlist';
import {Container,Col,Row} from 'react-bootstrap'
function App() {
  const [contacts,setContacts]=useState([])
const getData=(a)=>{
  console.log(a)
  setContacts([...contacts,{...a}])
}
// const i;
const removeId=(a)=>{
  // console.log("index"+a);
  // console.log("indexed data"+JSON.stringify( contacts));
   const filtdata=contacts.filter((check,i,rep)=>{
  
return (i !==a)
  });
  // console.log("outsisde"+ JSON.stringify(filtdata));
  setContacts(filtdata)
}
useEffect(()=>{
  const localdata=JSON.parse(localStorage.getItem("contactslocal"));
  setContacts(localdata)
},[])
useEffect(()=>{
  localStorage.setItem("contactslocal",JSON.stringify(contacts))

},[contacts]);
  return (
   
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col><h2>Contact Manager</h2></Col>
          <Col></Col>
        </Row>
      </Container>
     <Contactadd add={getData}/>
<Contactlist array={contacts} remove={removeId}/>
    </div>
  );
}

export default App;

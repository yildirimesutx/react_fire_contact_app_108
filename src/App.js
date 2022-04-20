import './App.css';

import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import {AddUser} from "./utils/functions"


const initialValues = {username:"", phoneNumber:"", gender:"NO INFO"}

function App() {

  const [info, setInfo] = useState(initialValues)

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log(info);
    AddUser(info)
  }



  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} />
      <Contacts />
    
    </div>
  );
}

export default App;

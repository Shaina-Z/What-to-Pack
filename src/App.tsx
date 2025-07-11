import './App.css';
import { Form, Button } from 'react-bootstrap';
import React, {useState} from 'react';

let keyData = "$OPENAI_API_KEY";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); 
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState(keyData); 
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          What to Pack
        </p>
        <p className='subtitle'>
          a website for all your packing needs
        </p>
          <Form.Group className='tripInput'>
        <input type="text"
        id="tripTextInput"
        />
      </Form.Group>
      </header>
      <Form className="api-form-container">
        <Form.Label style={{ fontFamily: "Courier New", color: '#800080', fontSize: '20px', }}>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
    </div>
  );
}

export default App;

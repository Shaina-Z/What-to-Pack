import './App.css';
import genResponse from './GPT.ts';
import { Form, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import loading from './loading.gif';//unsure why there is an error here, as the loading icon does appear

let keyData = "$OPENAI_API_KEY";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); 
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState(keyData); 
  const[response, setResponse]=useState("");
  const[markdown, setGPT]=useState("");
  const[submitted,setStatus]=useState(false);
  const[isLoading,setLoading]=useState(false);
  const sections = markdown.split(/(?=### )/);
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); 
  }
   function updateResponse(event: React.ChangeEvent<HTMLTextAreaElement>){
        setResponse(event.target.value)
    }
 async function generateReportForUser() {
  setLoading(true);
  setStatus(false);
  const result = await genResponse(response);
  setGPT(result);
  setStatus(true);
  setLoading(false);
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
        
          <Form.Group>
        <Form.Control 
        as="textarea"
        value={response}
        onChange={updateResponse}
        className='tripInput'
        />
      </Form.Group>
       <Button className="submit" onClick={generateReportForUser} style={{ fontSize: '20px'}}>Ready to Submit?</Button>
       {isLoading&&(<img src={loading} alt="loading" className='loading'></img>)}
       {submitted && (
       <div className="chat-output-container">
      {sections.map((section, idx) => (
        <div className="markdown-card" key={idx}>
          <ReactMarkdown>{section}</ReactMarkdown>
        </div>
      ))}
      </div>
       )}
      </header>
      <Form className="api-form-container">
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
          <Button className="submit" onClick={handleSubmit}>Submit</Button>
          </Form>
    </div>
  );
}

export default App;

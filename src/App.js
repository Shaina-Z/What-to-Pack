import './App.css';
import { Form } from 'react-bootstrap';

function App() {
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
      
    </div>
  );
}

export default App;

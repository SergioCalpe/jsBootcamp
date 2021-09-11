import './App.css';
import Mensaje from './Mensaje.js';

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='yellow' message='en un curso' />
      <Mensaje color='green' message='React' />
    </div>
  );
}

export default App;

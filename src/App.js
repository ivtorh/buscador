import { FiSearch } from "react-icons/fi";
import './App.css';
import { useState } from "react";

function App() {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    alert(input);
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 00000-000</h2>
        <span>Rua: teste</span>
        <span>Complemento: teste</span>
        <span>Bairro: Vila Rosa</span>
        <span>Cidade: Magé - RJ</span>
      </main>
    </div>
  );
}

export default App;

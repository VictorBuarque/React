import images from '../src/components/image/tomioka.jpg';
import './App.css';
import botao from './components/button/botao.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images} class="App-img"/>
    
        <p>
          Nome: Victor Gabriel Reis Buarque da Silva
        </p>
        <p>Idade: 30 anos</p>
        <p>Estudante técnico em Desenvolvimento de Sistemas pelo SENAI,
        focado na área de Front-End, possuo alguns projetos já realizados voltados a criação de Websites no Github.</p>
        <p>Últimos trabalhos: </p>
        <p>Sistema de Emissão de Certificados em PHP (em andamento)</p>
        <p>Sistema de mala direta em PHP realizado no SENAI</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/victorbuarque/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked in
        </a>
      </header>
    </div>
  );
}

export default App;

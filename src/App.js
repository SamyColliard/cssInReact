import './App.css';
import { Routes,Route } from 'react-router-dom';
import Logo from "./logo.svg"
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: grey;
`;

const Symbol = styled.img`
  width: 15vw;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Img = styled.img`
  width: 70vw;
`;

const Liste = styled.li`
  padding: 10px;
  justify-content: space-between;
`;

function App() {
  return (
    <div>
      <Nav>
        <Symbol src={Logo} alt='image of site'></Symbol>
        <Ul>
          <Liste>Ceci</Liste>
          <Liste>Est</Liste>
          <Liste>Un</Liste>
          <Liste>Test</Liste>
        </Ul>
      </Nav>
      <h1>Ceci est un Test</h1>
      <h2>Ceci est toujours un Test</h2>
      <p>pourquoi? pour tester</p>
      <Img src={Logo} alt='test'></Img>
    </div>
  );
}

export default App;

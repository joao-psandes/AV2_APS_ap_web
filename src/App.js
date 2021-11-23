import logo from './logo.svg';
import './App.css';

import Routes from './Routes';

import GlobalStyle from './globalStyles';

import {UsuarioProvider} from './Contexts/user';

import './Services/firebase';

function App() {
  return (
    <UsuarioProvider>
      <GlobalStyle/>
      <Routes/>
    </UsuarioProvider>
  );
}

export default App;
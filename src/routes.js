import Main from 'components/Main';
import Menu from 'components/Menu';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Inicio/>} />
          <Route path='cardapio' element={<Cardapio/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

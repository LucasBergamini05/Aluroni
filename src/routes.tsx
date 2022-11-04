import Footer from 'components/Footer';
import Cabecalho from 'components/Cabecalho';
import Menu from 'components/Menu';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import Sobre from 'pages/sobre';
import NotFound from 'pages/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prato from 'pages/prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Cabecalho/>}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path='prato/:id' element={<Prato/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

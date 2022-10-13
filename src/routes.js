import Footer from 'components/Footer';
import Main from 'components/Main';
import Menu from 'components/Menu';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import Sobre from 'pages/sobre';
import NotFound from 'pages/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

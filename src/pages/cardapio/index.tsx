import styles from './Cardapio.module.scss';
import { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import Menu from 'components/Menu';

export default function Cardapio(){
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <main>
      <header className={ styles.header }>
        <div className={ styles.header__text} >
          A casa do código e da massa
        </div>
      </header>
      <section className={ styles.cardapio }>
        <h3 className={ styles.cardapio__titulo }>Cardápio</h3>
        <Buscador setBusca={ setBusca }/>
        <div className={ styles.cardapio__filtros }>
          <Filtros filtro={ filtro } setFiltro={ setFiltro }/>
          <Ordenador ordenador={ ordenador } setOrdenador={ setOrdenador }/>
        </div>
        <div>
          <Itens busca={ busca } filtro={ filtro } ordenador= { ordenador }/>
        </div>
      </section>
    </main>
  );
}

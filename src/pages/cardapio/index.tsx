import styles from './Cardapio.module.scss';
import {ReactComponent as Logo } from 'assets/logo.svg';
import { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';

export default function Cardapio(){
  const [busca, setBusca] = useState("");
  const [filtroSelecionado, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('');

  return (
    <main>
      <nav className={ styles.menu }>
        <Logo></Logo>
      </nav>
      <header className={ styles.header }>
        <div className={ styles.header__text} >
          A casa do código e da massa
        </div>
      </header>
      <section className={ styles.cardapio }>
        <h3 className={ styles.cardapio__titulo }>Cardápio</h3>
        <Buscador busca={ busca } setBusca={ setBusca }/>
        <div className={ styles.cardapio__filtros }>
          <Filtros filtroSelecionado={ filtroSelecionado } setFiltro={ setFiltro }/>
          <Ordenador ordenador={ ordenador } setOrdenador={ setOrdenador }/>
        </div>
      </section>
    </main>
  )
}

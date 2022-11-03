import { useEffect, useState } from 'react';
import { Cardapio } from 'types/Prato';

import cardapio from '../../../data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';

interface IProps{
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens( { busca, filtro, ordenador }: IProps ){
  const [lista, setLista] = useState(cardapio); 

  function testaBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro) return id === filtro;
    return true;
  }

  function ordenacaoCrescente( lista: Cardapio, propriedade: 'size' | 'serving' | 'price' ){
    return lista.sort( (a, b)=> a[propriedade] > b[propriedade] ? 1 : -1 );
  }

  function ordenacaoDecrescente( lista: Cardapio, propriedade: 'size' | 'serving' | 'price' ){
    return lista.sort( (a, b)=> a[propriedade] > b[propriedade] ? -1 : 1 );
  }

  function ordena(lista: Cardapio){
    switch(ordenador.split('-')[0]){
    case 'porcao':
      return ordenador.split('-')[1] === 'crescente' ? ordenacaoCrescente(lista, 'size') : ordenacaoDecrescente(lista, 'size');
    case 'qtd_pessoas':
      return ordenador.split('-')[1] === 'crescente' ? ordenacaoCrescente(lista, 'serving') : ordenacaoDecrescente(lista, 'serving');
    case 'preco':
      return ordenador.split('-')[1] === 'crescente' ? ordenacaoCrescente(lista, 'price') : ordenacaoDecrescente(lista, 'price');

    default:
      return lista;
    }
  }

  useEffect(
    ()=> {
      const novaLista = cardapio.filter( item => testaBusca(item.title) && testaFiltro(item.category.id) );
      setLista(ordena(novaLista));
    }, [ busca, filtro, ordenador ]
  );

  return(
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={ item.id } {...item}></Item>
      ))}
    </div>
  );
}

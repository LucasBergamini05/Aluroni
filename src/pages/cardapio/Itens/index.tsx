import { useEffect, useState } from 'react';

import cardapio from './itens.json'
import Item from './Item'
import styles from './Itens.module.scss'

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
  };

  function testaFiltro(id: number){
    if(filtro) return id === filtro;
    return true;
  };

  function ordena(lista: typeof cardapio){
    switch(ordenador){
      case 'porcao':
        return lista.sort( (a, b)=> a.size > b.size ? 1 : -1 );
      case 'qtd_pessoas':
        return lista.sort( (a, b)=> a.serving > b.serving ? 1 : -1 );
      case 'preco':
        return lista.sort( (a, b)=> a.price > b.price ? 1 : -1 );
      default:
        return lista;
    };
  };

  useEffect(
    ()=> {
      const novaLista = cardapio.filter( item => testaBusca(item.title) && testaFiltro(item.category.id) )
      setLista(ordena(novaLista))
    }, [ busca, filtro, ordenador ]
  );

  return(
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={ item.id } {...item}></Item>
      ))}
    </div>
  );
};

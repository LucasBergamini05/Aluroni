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
  }

  function testaFiltro(id: number){
    if(filtro) return id === filtro;
    return true;
  }

  useEffect(
    ()=> {
      const novaLista = cardapio.filter( item => testaBusca(item.title) && testaFiltro(item.category.id) )
      setLista(novaLista)
    }, [ busca, filtro ]
  )

  return(
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={ item.id } {...item}></Item>
      ))}
    </div>
  )
}

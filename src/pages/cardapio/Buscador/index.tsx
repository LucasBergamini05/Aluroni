import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg'
import { useEffect, useState } from 'react';

interface IProps{
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>,
}

export default function Buscador({busca, setBusca}: IProps){
  const [ query, setQuery ] = useState('');

  useEffect(()=> {
    const timeout = setTimeout(()=> setBusca(query), 300);
    return () => clearTimeout(timeout);
  }, [query] );

  return(
    <div className={styles.buscador}>
      <input
        value={query}
        onChange={evento => setQuery(evento.target.value)}
        placeholder='Buscar'
      />
      <CgSearch size={35} color="#4C4D5E"/>
    </div>
  );
}

import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface IProps {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: IProps){
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return(
    <button 
      className={ styles.ordenador }
      onClick={ ()=> setAberto(!aberto) } 
      onBlur={ ()=> setAberto(false) }>
      <span> { ordenador ? nomeOrdenador : 'Ordenar Por'} </span>
      
      {aberto ? 
        (<MdKeyboardArrowUp size={25}/>) :
        (<MdKeyboardArrowDown size={25}/>)
      }

      <div className={ classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto})}>

        {opcoes.map(opcao => (
          <div 
            className={ styles.ordenador__option } 
            key={ opcao.value } 
            onClick={ () => setOrdenador(opcao.value) }
          >{ opcao.nome }</div>
        ))}

      </div>
    </button>
  );
}

import styles from './Main.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';

export default function Cabecalho(){
  return(
    <>
      <header className={ styles.header }>
        <div className={ styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet/>
      </div>
    </>
  );
}
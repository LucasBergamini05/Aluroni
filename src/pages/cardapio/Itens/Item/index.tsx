import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import Tags from 'components/Tags';

export default function Item(prato: Prato) {

  return(
    <div className={ styles.item }>
      <div className= {styles.item__imagem }>
        <img src={ prato.photo } alt="logo"/>
      </div>
      <div className={ styles.item__descricao }>
        <div className={ styles.item__titulo }>
          <h2> { prato.title } </h2>
          <p> { prato.description } </p>
        </div>
        <Tags {...prato}/>
      </div>
    </div>
  );
}

import styles from './Item.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

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
        <div className={ styles.item__tags }>
          <div 
            className={ classNames({ 
              [styles.item__tipo]: true, 
              [styles[`item__tipo__${prato.category.label.toLowerCase()}`]]: true 
            })}
          > { prato.category.label } </div>
          <div className={ styles.item__porcao }> { prato.size }g </div>
          <div className={ styles.item__qtdpessoas }> Serve { prato.serving } pessoa{ prato.serving>1 ? 's' : '' } </div>
          <div className={ styles.item__valor }> R${ prato.price.toFixed(2) } </div>
        </div>
      </div>
    </div>
  );
}

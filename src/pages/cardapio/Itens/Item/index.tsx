import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import Tags from 'components/Tags';
import { useNavigate } from 'react-router-dom';

export default function Item(prato: Prato) {
  const navigate = useNavigate();

  return(
    <div className={ styles.item } onClick={ () => navigate(`/prato/${prato.id}`) }>
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

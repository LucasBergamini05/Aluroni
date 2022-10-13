import { ReactComponent as NotFoudImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function NotFound(){
  return(
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <NotFoudImage/>
    </div>
  );
}
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import className from 'classnames';

interface IFiltro{
  label: string;
  id: number;
}

interface IProps{
  filtroSelecionado: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros( {filtroSelecionado, setFiltro}: IProps ){

  function selecionarFiltro(filtro: IFiltro){
    if(filtroSelecionado === filtro.id){
      return setFiltro(null);
    }
    setFiltro(filtro.id);
  }

  return(
    <div className={styles.filtros}>
      {filtros.map(filtro => (
          <button className={className({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtro.id === filtroSelecionado
          })}
          key={filtro.id}
          onClick={() => selecionarFiltro(filtro)}>
            {filtro.label}
          </button>
        )
      )}
    </div>
  )
}

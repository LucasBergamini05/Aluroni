import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import className from 'classnames';

interface IFiltro{
  label: string;
  id: number;
}

interface IProps{
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros( {filtro, setFiltro}: IProps ){

  function selecionarFiltro(filtroSelecionado: IFiltro){
    if(filtro === filtroSelecionado.id){
      return setFiltro(null);
    }
    setFiltro(filtroSelecionado.id);
  }

  return(
    <div className={styles.filtros}>
      {filtros.map(filtroSelecionado => (
          <button className={className({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtroSelecionado.id === filtro
          })}
          key={filtroSelecionado.id}
          onClick={() => selecionarFiltro(filtroSelecionado)}>
            {filtroSelecionado.label}
          </button>
        )
      )}
    </div>
  )
}

import filtros from './filtros.json'
import styles from './Filtros.module.scss'

interface IFiltro{
  label: string;
  id: number
}

export default function Filtros(){

  function selecionarFiltro(filtro: IFiltro){}

  return(
    <div className={styles.filtros}>
      {filtros.map(filtro => {
        return(
          <button className={styles.filtros__filtro} key={filtro.id} onClick={() => selecionarFiltro(filtro)}>
            {filtro.label}
          </button>
        )
      })}
    </div>
  )
}

import styles from './Buscador.module.scss';

interface IProps{
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>,
}

export default function Buscador({busca, setBusca}: IProps){
  return(
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
        placeholder='Buscar'
      />
    </div>
  )
}

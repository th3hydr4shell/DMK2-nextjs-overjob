import styles from './styles.module.css'

function Card({ title, enterprise, description, day, local }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>{ title }</h2>
        <h3>{ enterprise }</h3>
        <p>{ description }</p>
      </div>

      <div className={styles.details}>
        <h3>Publicado</h3>
        <p>{ day }</p>
        <p>{ local }</p>
      </div>
    </div>
  )
}

export default Card
import styles from './styles.module.css'

function Filters({ category, filters, onChange }) {
  return (
    <div className={styles.filters}>       
      <h4 className={styles.title}>{ category }</h4>
      <ul className={styles.filter_list}>
        { 
          filters && 
          filters.map(filter => {
            const id = `${category.toLowerCase()} - ${filter.toString().replace(" ", "")}`
            return (
              <li key={ id }>
                <input 
                  type="checkbox" 
                  name={ category.toLowerCase() } 
                  id={ id }
                  onChange={(ev) => onChange(category, ev.target.checked, filter)}
                />
                <label htmlFor={ id }>{ filter }</label>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Filters
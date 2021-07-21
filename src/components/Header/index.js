import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

function Header({ showSearch = true, onClick }) {
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')

  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <Link
            href="/"
            passHref
          >
            <a>
              <h1>OverJob</h1>
              {/* <Image
                src="/images/logo.svg"
                width="200"
                height="40"
                alt="Logo do Overjob"
              /> */}
            </a>           
          </Link>

          <Link
            href="/description/1"
            passHref
          >
            <a>
              <button className={styles.publish}>
                Cadastrar Vaga
              </button>
            </a>
          </Link>
        </div>

        {
          showSearch &&
        
          <div className={styles.search}>
            <div className={styles.searchFields}>
              <input 
                type="text" 
                placeholder="Procure pelo nome de uma vaga" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <input 
                type="text" 
                placeholder="Procure pela cidade" 
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <button onClick={() => onClick(title, city)} >
                <Image
                  src="/images/lupa.svg"     
                  alt="Ícone de pesquisa"
                  width={24}
                  height={24}          
                />
              </button>
            </div>
          </div>
        }
        
    </div>
  )
}

export default Header
import axios from 'axios'
import { useRouter } from 'next/router'

import CardDetails from '../../src/components/Card'
import Header from '../../src/components/Header'
import styles from './styles.module.css'

export default function Job({ job }) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Header showSearch={false} />

      <div className={styles.card}>        
        {
          job && 
            <CardDetails 
              title={ job.title } 
              description={ job.description }
              enterprise={ job.enterprise }
              day={ job.day }
              local={`${job.city} - ${job.state}`}
            />
        }
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(ctx) {
  const { id } = ctx.params
  const { data } = await 
    axios.get(`http://localhost:3000/api/jobs?id=${ id }&secret=1234`)  
  
  return {
    props: {
      job: data.jobs
    } 
  }
}
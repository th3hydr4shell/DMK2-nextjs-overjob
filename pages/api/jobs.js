import jobs from '../../src/docs/jobs.json'

// export default function handler(req, res) {
export default (req, res) => {
  const { id } = req.query;

  // if (req.query.secret !== '1234') {
  //   res.status(400).json({ 
  //     error: true,      
  //     message: "Secret inválida"
  //   })
  // }

  if (req.method === 'GET') {
    if (id) {
      // retorna somente o job com o id informado
      const [job = {}] = jobs.filter(job => job.id === Number(id))

      res.status(200).json({ 
        error: false,
        jobs: job
      })

    } else {
      // retorna todos os jobs
      res.status(200).json({ 
        error: false,
        jobs
      })
    }
  } else {
    res.status(400).json({ 
      error: true,      
      message: "Método não suportado"
    })
  }
}

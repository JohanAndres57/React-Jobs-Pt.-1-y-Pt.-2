import { useParams } from "react-router"
import { useEffect,useState } from "react"
import Spinner from "../componentes/Spinner"
import JobListing from "../componentes/JobListing"

const JobPage = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect( () => {
    const fetchJob = async () => {
        try {
            const result = await fetch('/api/jobs/' + id)
            const data = await result.json()
            setJob(data)
        } catch (error){
            console.log("Error trayendo los datos",error)
        }finally{
            setCargando(false)
        }
    }
    fetchJob()
  } ,[id])
  return (
    <div>
        {cargando ? 
                  (<Spinner cargando={cargando}/>)
                  : job ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <JobListing key={job.id} job={job}/>
                    </div>
                  ) : (
                    <p className="text-center py-10">No se encontró el empleo.</p>
                  )
                } 
    </div>
  )
}

export default JobPage
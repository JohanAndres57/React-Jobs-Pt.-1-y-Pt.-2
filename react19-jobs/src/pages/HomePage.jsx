import Hero from "../componentes/Hero"
import HomeCards from "../componentes/HomeCards"
import JobListings from "../componentes/JobListings"
import ViewAllJobs from "../componentes/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    <Hero titulo="Become a React Dev" subtitulo="Find the React job that fits your skills and needs"/>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    </>
    
  )
}

export default HomePage

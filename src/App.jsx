import Navbar from './assets/components/NavBar';
import Hero from './assets/components/Hero';
import HomeCards from './assets/components/HomeCards';
import JobListings from './assets/components/JobListings';
import ViewAllJobs from './assets/components/ViewAllJobs';


export default function App() {
  return(
    <>
      <Navbar />

      <Hero />
      
      <HomeCards />

      <JobListings />

      <ViewAllJobs />
    </>
  )
};
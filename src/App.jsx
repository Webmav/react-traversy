import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import HomePage from './assets/pages/HomePage'

import Navbar from './assets/components/NavBar';
import HomeCards from './assets/components/HomeCards';
import JobListings from './assets/components/JobListings';
import ViewAllJobs from './assets/components/ViewAllJobs';

import MainLayout from './assets/layouts/MainLayout';
import JobsPage from './assets/pages/JobsPage';


export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/jobs' element={<JobsPage />} />
        </Route>
      </Routes>
    </Router>
  )
};
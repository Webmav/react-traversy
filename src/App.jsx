import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './assets/layouts/MainLayout';
import HomePage from './assets/pages/HomePage'
import JobsPage from './assets/pages/JobsPage';
import NotFoundPage from './assets/pages/NotFoundPage';
import JobPage, {JobLoader} from './assets/pages/JobPage';
import Spinners from './assets/components/Spinners';
import AddJobPage from './assets/pages/AddJobPage';
import EditJobPage from './assets/pages/EditJobPage';

export default function App() {
  //Add Job
  async function addJob(newJob) {
    const res = await fetch("/api/jobs", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //Delete Job
  async function deleteJob(id) {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  //Update Job
  async function updateJob(job) {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={ addJob } />} />
        <Route path='/edit-jobs/:id' element={<EditJobPage updateJobSubmit={ updateJob }/>} loader={JobLoader}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob } />} loader={JobLoader}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
};
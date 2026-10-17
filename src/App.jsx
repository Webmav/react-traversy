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

export default function App() {
  async function jobSubmit(newJob) {
    const res = await fetch("/api/jobs", {
      method: 'POST',
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
        <Route path='/add-job' element={<AddJobPage addJobSubmit={jobSubmit} />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={JobLoader}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
};
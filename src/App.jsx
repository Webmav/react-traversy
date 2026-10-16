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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={JobLoader}/>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
};
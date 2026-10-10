import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import MainLayout from './assets/layouts/MainLayout';
import HomePage from './assets/pages/HomePage'
import JobsPage from './assets/pages/JobsPage';
import NotFoundPage from './assets/pages/NotFoundPage';
import JobPage from './assets/pages/JobPage';

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/jobs' element={<JobsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
};
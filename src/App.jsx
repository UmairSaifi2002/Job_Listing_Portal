import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './Pages/landing'
import OnBoarding from './Pages/onboarding'
import JobListing from './Pages/job-listing'
import JobPage from './Pages/job'
import PostJobs from './Pages/post-job'
import SavedJobs from './Pages/saved-job'
import MyJobs from './Pages/my-jobs'
import { ThemeProvider } from './components/theme-provider'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:<OnBoarding />
      },
      {
        path:'/jobs',
        elements:<JobListing />
      },
      {
        path:'/job/:id',
        element:<JobPage />
      },
      {
        path:'/post-job',
        element:<PostJobs />
      },
      {
        path:'/saved-path',
        element:<SavedJobs />
      },
      {
        path:'/my-jobs',
        element:<MyJobs />
      },
      
    ],
  },
]);

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

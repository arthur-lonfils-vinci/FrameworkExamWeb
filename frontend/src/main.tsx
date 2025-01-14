

// UPDATE THE NAME OF THE VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Library -> with the exam variables name


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/index.tsx'
import HomePage from './pages/main/index.tsx';
import { LibraryPage } from './pages/page_pour_exam/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LibraryPageById } from './pages/page_pour_exam/libraryById.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "library/",
        element: <LibraryPage />,
      },
      {
        path: "library/:bookId",
        element: <LibraryPageById />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>, 
)

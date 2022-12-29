
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Aboutus from './pages/about/Aboutus';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Todopage from './pages/todo/Todopage';
function App() {
  const router = createBrowserRouter([
      {
        path:'/', element:<Main></Main>,children:[
        {
         path:'/', element:<Home></Home>
        },
        {
         path:'/about',element:<Aboutus></Aboutus>
        },
         {
          path:'/todo',element:<Todopage></Todopage>
         },
         {
          path:'/contact',element:<Contact></Contact>
         }
        ]
      }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>


      </RouterProvider>
    </div>
  );
}

export default App;

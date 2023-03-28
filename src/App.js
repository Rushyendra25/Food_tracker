
import './App.css';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import UserList from './components/userList/UserList'
import RootLayout from './RootLayout';
import Adddiet from './components/adddiet/Adddiet';
import Bmi from './components/bmi/Bmi';


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout  />,
      children:[
       {
        path:"/",
        element:<Home />
       },
       {
        path:"/login",
        element: <Login  />
       },
       {
        path:"/register",
        element:<Register />
       },
       {
        path:"/userList",
        element:<UserList />
       },
       {
          path:"/adddiet",
          element:<Adddiet/>
       },{
        path:"/bmi",
        element : <Bmi/>
       }
       
      ]
    }
  ])
  return (
    <div className="App">
   
    <RouterProvider router={router} />
    </div>
  );
}

export default App;

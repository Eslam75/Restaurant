import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Main from './Components/Main/Main.jsx'






export default function App() {







// eslint-disable-next-line no-undef





// let routers=createBrowserRouter([
//   {path:"",element:<Layout />,children:[
//      {index: true,element:<Home />},
//      {path:"home",element:<Home />},

     

//       {path:"*",element: <Notfound/>}


      
//   ]}
// ])


  return <>
  <Main/>
  {/* <RouterProvider router={routers}></RouterProvider> */}
  </>
}
